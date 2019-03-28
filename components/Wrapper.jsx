import React from 'react'

//Use it like this  <Wrapper row={1} column={4} />
export default function Wrapper(props) {
    let row = props.row ||  1;
    let col = props.column || 1
  return (
    <div>
        {/* pass the component to be used in each column */}
        {createRows(row, col, props)}
    </div>
  )
}

function createRows (numberOfRows, numberOfCols, props) {
    let rows = []
    for (let row = 1; row <= numberOfRows; row++) {
        let readyCols = createColumns(numberOfCols, props)
        let completeRow = <div key={row} className="row">{readyCols}</div>
        rows.push(completeRow)
    }
    return rows;
}

function createColumns (columns, props) {
    let cols = [], numberOfCols, colIsCompatible, classList = "";
    let isMultiDevice = false;
    numberOfCols = columns
    // for multi device
    if (Array.isArray(columns)) {
        isMultiDevice = true
        //props column [desktop,tablet,mobile];
        numberOfCols = columns[0];
    }
    let colWidth = 12 / numberOfCols
    // colWidth should fit in 12 column grids
    colIsCompatible = isInt(colWidth)
    if (!colIsCompatible) {
        throw new Error("Col number is not compatible with 12 col grids");
    }
    if (isMultiDevice) {
        let colSizes = ['col-lg-','col-md-','col-sm-','col-']
        columns.forEach((col, index) => {
            classList += `${colSizes[index]}${col} `
        })
    } else {
        // defualt is desktop
        classList = "col-md-" + colWidth
    }
    
    for (let col = 1; col <= numberOfCols; col++) {
        let struct = <div key={col} className={classList}>{props.render()}</div>
        cols.push(struct)
    }
    
    return cols;
}

function isInt(n){
    return( Number(n) === n) && (n % 1 === 0);
}


