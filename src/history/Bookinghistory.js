import React, { useState, useEffect } from 'react'

import HistoryServices from '../services/history_servies'

import '../css/Bookinghistory.css'

function Bookinghistory() {

    const [dataTable, setDataTable] = useState([])

//     useEffect(() => {
//         HistoryServices.booking().then(
//             setDataTable(response.data.something)
//         )
//     }, [])


//    const columns = React.useMemo(
//         () =>
//           [
//             {
//               Header: "Numbers",
//               accessor: "no"
//             },
//             {
//               Header: "Date",
//               accessor: "date"
//             },
//             {
//               Header: "Court",
//               accessor: "court"
//             },
//             {
//               Header: "Time",
//               accessor: "time"
//             },
//             {
//               Header: "Timeout",
//               accessor: "timeout"
//             },
//             {
//               Header: "Status",
//               accessor: "status"
//             },
//             {
//               Header: "Action",
//               accessor: "action"
//             }
//           ]
//         ,
//         []
//       )
    
//       // const data = React.useMemo(() => dataHeader, [])
//       // const data = dataApi
//       const data = historyOfbooking
//       console.log("this is data from Header", authority2)
//           console.log(historyOfbooking)
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//       } = useTable({ columns, data })    

    return (
        <div className="History__booking">
            <h1>Booknig History</h1>

        {/* Bring table from HeaderTable */}

        </div>
    )
}

export default Bookinghistory
