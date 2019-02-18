import createData from './services'
import React from 'react'
import { create } from 'domain';
import BootstrapTable from 'react-bootstrap-table-next'
// import { createTracing } from 'trace_events';
import './bachcha.css'

const product = createData(5)

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

class Paijama extends React.Component{
    render(){
        
        return(
            <React.Fragment>
            <BootstrapTable
                id = 'bar'
                keyField = 'id'
                data = {product}
                //style = {syle}
                columns = {column}
            >
            </BootstrapTable> 
            <BootstrapTable
                // Bootstrap will not use className instead it will use clasess
                classes = 'foo'
                keyField = 'id'
                data = {product}
                columns = {column}
            >
            </BootstrapTable>
            </React.Fragment>         
        )
    }
}

export default Paijama
// import BootstrapTable from 'react-bootstrap-table-next'
// import obj from '../Bandar/awara'
// var createData = require('./services')
// // var BootstrapTable = require('react-bootstrap-table-next')

// console.log(obj)
// var React = require('react')
// const column = [{
//     dataField: 'id',
//     text: 'Product ID'
// },

// {
//     dataField: 'name',
//     text: 'Product Name'
// },
// {
//    // dataField: 'Price', case sensitive we have type like price not Price
//    dataField: 'price',
//     text: 'Product Price'
// }
// ]
// const indicator = function(){
//     return 'Something is here!! '
// }
// const products = createData(10)

// const productsData = function(){
//     console.log(products)
//     return products   
// }

// class Badho extends React.Component{
//     render(){
//         return(
//             <BootstrapTable
//               keyField='id'
//             //   Failed prop type: Invalid prop `data` of type `function` supplied to `DataProvider`, expected `array`.
//             //   data = {productsData}
//               columns = {column}
//               data = {products}
//               striped // For zebra striping
//               //border 
//               condensed
//               bordered = {false}
//             //   noDataIndication = 'Table is empty'
//             noDataIndication = {indicator}
//             >
//             </BootstrapTable>
//         )
//     }
// }

// export default Badho
