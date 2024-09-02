// import React from 'react'
// import DataTable from "react-data-table-component";

// export default function Table() {
//   return (
//     <div>
//           <div className="container my-5">
//               <DataTable />
//           </div>
//     </div>
//   )
// }


import React from "react";

import DataTable from "react-data-table-component";
import { FaArrowDownShortWide } from "react-icons/fa6";

import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "../components/data";

import "../css/Data.css"

function Table() {
    const tableData = {
        columns,
        data
    };

    return (
        <div className="main">
            <DataTableExtensions {...tableData}>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    sortIcon={<FaArrowDownShortWide />}
                    defaultSortAsc={true}
                    pagination
                    highlightOnHover
                    dense
                />
            </DataTableExtensions>
        </div>
    );
}

export default Table;

