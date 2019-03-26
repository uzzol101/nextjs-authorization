import React from 'react'
import Card from './Card'
export default function Wrapper(props) {
    const row = props.row ||  2;
    const col = props.col || 2;
  return (
    <div>
        {createRows(2, 2, Card)}
    </div>
  )
}

function createRows (numberOfRows, numberOfCols, component) {
    let rows = []
    for (let row = 1; row <= numberOfRows; row++) {
        let readyCols = createColumns(numberOfCols, component)
        let completeRow = `<div className="row">${readyCols}</div>`
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
        let struct = `<div className={"col-sm-" + ${colWidth}}><${component}></${component}></div>`
        cols.push(struct)
    }
    
    return cols.join(',');
}

function isInt(n){
    return( Number(n) === n) && (n % 1 === 0);
}