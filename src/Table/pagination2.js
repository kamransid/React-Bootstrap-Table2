import createTable from './services'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import React from 'react'
const products = createTable(500)
const col = [{
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
},
]
const customTotal = (from, to, size) => (
    <span className='react-bootstrap-table-pagination-total'>
        Showing {from} to {to} of {size} Results
    </span>
)
const options = {
    paginationTotalRenderer: customTotal,
    
    pageStartIndex: 0,
    showTotal: true,
    firstPageText: 'First',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    prePageText: 'Back',
    firstPageTitle: 'Next Page',
    sizePerPageList: [{
        text: '5',
        value: 5
    },
    {
        text: '10',
        value: 10
    },
    {
        text: 'All',
        value: products.length
    }
    ],
    onSizePerPageChange: (sizePerPage, page) => {
        console.log('Size per page change!!!')
        console.log('Newest size per page:' + sizePerPage)
        console.log('Newwest page:' + page)
    },
    onPageChange: (page, sizePerPage) => {
        console.log('Page change!!!')
        console.log('Newwest size per page:' + sizePerPage)
        console.log('Newest Page:' + page)
    }
}





class Pair extends React.Component {
    render() {
        return (
            <BootstrapTable
                data={products}
                keyField='id'
                columns={col}
                pagination={paginationFactory(options)}
            >
            </BootstrapTable>
        )
    }
}

export default Pair