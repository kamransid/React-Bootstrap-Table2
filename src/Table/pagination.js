import paginationFactory from 'react-bootstrap-table2-paginator'
var BootstrapTable = require('react-bootstrap-table-next')

var createData = require('../Table/services')
var React = require('react')
const product = createData(50)
console.log(product)
const columns = [{
    dataField: 'id',
    text: 'Product ID'
},
{
    dataField: 'name',
    text: 'Product Name'
},
{
    dataField: 'price',
    text: 'Product Price'
}
]

class Bholu extends React.Component {
    render() {
        return (
            <BootstrapTable
             keyField='id'
             data={product}
             columns={columns}
             pagination={paginationFactory}>
             </BootstrapTable>
        )
    }
}

export default Bholu






