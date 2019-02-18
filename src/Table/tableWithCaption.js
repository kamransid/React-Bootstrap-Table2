import createData from './services'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

const data = createData(5)

const column = [{
    dataField: 'id',
    text: 'Product ID'
},

{
    dataField: 'price',
    text: 'Product Price'
},
{
    dataField: 'name',
    text: 'Product Name'
}
]

const CaptionElement = () => {
    return (
        <h3
            style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}
        >
            Component as Header
        </h3>

    )
}

class Bumb extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BootstrapTable
                    keyField='id'
                    data={data}
                    caption='Palin text Header'
                    columns={column}
                >

                </BootstrapTable>

                <BootstrapTable
                    caption = {<CaptionElement/>}
                    keyField = 'id'
                    data = {data}
                    columns = {column}
                >
                    
                </BootstrapTable>

            </React.Fragment>
        )
    }
}

export default Bumb