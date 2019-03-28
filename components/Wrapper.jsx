import React from 'react'

//Use it like this  <Wrapper row={1} column={4} />
export default function Wrapper(props) {
    let row = props.row ||  1;
    let col = props.column || 1
  return (
    <div>
        {/* pass the component to be used in each column */}
        {createRows(props)}
    </div>
  )
}

function createRows (props) {
    let rows = []
    for (let row = 1; row <= props.row; row++) {
        let readyCols = createColumns(props)
        let completeRow = <div key={row} className="row">{readyCols}</div>
        rows.push(completeRow)
    }
    return rows;
}

function createColumns (props) {
    let cols = [], numberOfCols, colIsCompatible, classList = "";
    let isMultiDevice = false;
    numberOfCols = props.column
    let colWidth = (12 / props.column)
    // colWidth should fit in 12 column grids
    colIsCompatible = isInt(colWidth)
    if (!colIsCompatible) {
        throw new Error("Col number is either incompatible with 12 col grids or you forgot to pass column props");
    }
    if (props.classList && props.classList.length) {
        let colSizes = ['col-','col-sm-','col-lg-']
        props.classList.forEach((col, index) => {
            classList += ` ${colSizes[index]}${col}`
        })
    }
    
    for (let col = 1; col <= numberOfCols; col++) {
        let struct = <div key={col} className={"col-md-" + colWidth + classList}>{props.render()}</div>
        cols.push(struct)
    }
    
    return cols;
}

function isInt(n){
    return( Number(n) === n) && (n % 1 === 0);
}


