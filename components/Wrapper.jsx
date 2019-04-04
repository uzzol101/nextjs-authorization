import React from 'react'
/* 
    props type
        row: number 
        column: number 
        classList: [numbers] // [2, 3, 4] will render as [col-2, col-sm-3, col-lg-4]
        component: function // () => <Card />
*/

export default function RenderView(props) {
    let data = chunk(props.data, props.column)
  return (
    <div>
        {createRowsWithColumns(props, data)}
    </div>
  )
}


function createRowsWithColumns (props, data) {
    if (!props.row || ! props.column || typeof props.component !== 'function') {
        throw new Error("Make sure you have provided row, column and component props")
    }
    let rows = []
    for (let row = 0; row < props.row; row++) {
        let readyCols = createColumns(props, data[row])
        let completeRow = <div key={row} className="row">{readyCols}</div>
        rows.push(completeRow)
    }
    return rows;
}

function createColumns (props, data) {
    let cols = [], numberOfCols, colIsCompatible, classList = "";
    numberOfCols = props.column
    let colWidth = columnWidth(props.column)
    if (props.column > 12) {
        throw new Error('column should not exceed 12')
    }
    if (props.classList && props.classList.length) {
        let colSizes = ['col-','col-sm-','col-lg-']
        props.classList.forEach((col, index) => {
            classList += ` ${colSizes[index]}${col}`
        })
    }
    for (let col = 0; col < numberOfCols; col++) {
        let struct = <div key={col} className={"col-md-" + colWidth + classList}>{props.component({data: propsData(data, col)})}</div>
        cols.push(struct)
    }
    return cols;
}


function propsData (data, index) {
    if (Array.isArray(data)) {
        return data[index]
    } else {
        return data
    }
}

function columnWidth (col) {
    if (12 % col == 0) {
        return 12 / col
    } else {
        return 1
    }
}

function chunk (data, chunkSize) {
    let original = [...data]
    let chunkResult = []
    let iterationNumber = Math.floor(data.length / chunkSize)
    for (let i = 0; i < iterationNumber; i++) {
        let chunked = original.splice(0, chunkSize)
        chunkResult.push(chunked)
    }
    chunkResult.push(original)
    return chunkResult
}
