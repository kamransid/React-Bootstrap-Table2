import BootstrapTable from 'react-bootstrap-table-next'
var createData = require('./services')
// var BootstrapTable = require('react-bootstrap-table-next')

var React = require('react')
const column = [{
    dataField: 'id',
    text: 'Product ID'
},

{
    dataField: 'name',
    text: 'Product Name'
},
{
   // dataField: 'Price', case sensitive we have type like price not Price
   dataField: 'price',
    text: 'Product Price'
}
]
const products = createData(20)
class Badho extends React.Component{
    render(){
        return(
            <BootstrapTable
              keyField='id'
              data = {products}
              columns = {column}
              striped // For zebra striping
              border
            >
            </BootstrapTable>
        )
    }
}

export default Badho
