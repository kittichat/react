import react , {useState} from 'react'
import ReactTable from 'react-table'

import Data from '../../api/booking_data'



function Booking() {
    const [data, setData]  = useState(Data) // this is for api; don't forget to import api; I have to add fixed row too

    // at this point i should handle something for Clicking, then it should look different
    // onRowClick = (state, rowInfo, column, instance) => {
    //     return {
    //         onClick : (e, handletime:Original) => {
    //             console.log(`Row index: ${rowInfo.index}, column header: ${column,Header}`)
    //             if(handleOriginal){
    //                 handleOriginal()
    //             }
    //         }
    //     }
    }

    return (

        <>
            <ReactTable
                data = {data}
                column ={[
                    {
                        Header: "All courts",
                        columns: [
                            {Header:"Court1",accessor:"court1"},                            
                            {Header:"Court2",accessor:"court2"},
                            {Header:"Court3",accessor:"court3"},
                            {Header:"Court4",accessor:"court4"},
                            {Header:"Court5",accessor:"court5"},
                            {Header:"Court6",accessor:"court6"},
                            {Header:"Court7",accessor:"court7"},
                            {Header:"Court8",accessor:"court8"},
                            {Header:"Court9",accessor:"court9"},
                        ]
                    }
                ]}

                className="React-table"
            >

            </ReactTable>
        </>
    )
}
