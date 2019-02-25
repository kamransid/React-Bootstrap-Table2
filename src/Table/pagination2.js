import createTable from './services'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import React from 'react'
const products = createTable(50)
const col = [{
    dataField:'id',
    text:'Product ID'
},
{
    dataField:'name',
    text:'Product Name'
},
{
    dataField:'price',
    text:'Product Price'
},
]
class Pair extends React.Component {
    render() {
        return (
            <BootstrapTable
              data = {products}
              keyField = 'id'
              columns = {col}
              pagination = {paginationFactory()}
            >
            </BootstrapTable>
        )
    }
}

export default Pair