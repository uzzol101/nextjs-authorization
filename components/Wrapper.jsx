import React from 'react'
import Card from './Card'

//Use it like this  <Wrapper row={1} column={4} />
export default function Wrapper(props) {
    let row = props.row ||  1;
    let col = props.column || 1;
  return (
    <div>
        {/* pass the component to be used in each column */}
        {createRows(row, col, <Card  />)}
    </div>
  )
}

function createRows (numberOfRows, numberOfCols, component) {
    let rows = []
    for (let row = 1; row <= numberOfRows; row++) {
        let readyCols = createColumns(numberOfCols, component)
        let completeRow = <div key={row} className="row">{readyCols}</div>
        rows.push(completeRow)
    }
    return rows;
}

function createColumns (numberOfCols, component) {
    let cols = []
    let colWidth = 12 / numberOfCols
    // colWidth should fit in 12 column grids
    let colIsCompatible = isInt(colWidth)
    if (!colIsCompatible) {
        throw new Error("Col number is not compatible with 12 col grids");
    }
    for (let col = 1; col <= numberOfCols; col++) {
        let struct = <div key={col} className={"col-sm-" + colWidth}>{component}</div>
        cols.push(struct)
    }
    
    return cols;
}

function isInt(n){
    return( Number(n) === n) && (n % 1 === 0);
}


