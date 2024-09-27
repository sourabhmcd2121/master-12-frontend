// import React from 'react'

// export default function MasterCountryMstGuid() {
//   return (
//     <div>
//           <h1>CountryMstGuid</h1>
//     </div>
//   )
// }


// src/MasterCountryMstGuid.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const MasterCountryMstGuid = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data); // Ensure this is an array
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            name: 'id',
            selector: row => row.id, // Adjust based on your data structure
            sortable: true,
            cell: row => <div className="data-table-cell">{row.id}</div>,
        },
        {
            name: 'title',
            selector: row => row.title, // Adjust based on your data structure
            sortable: true, warp: true,
            cell: row => <div className="data-table-cell">{row.title}</div>,
        },
        {
            name: 'price',
            selector: row => row.price, // Adjust based on your data structure
            sortable: true,
        },
        {
            name: 'description',
            selector: row => row.description, // Adjust based on your data structure
            sortable: true,
            cell: row => <div className="data-table-cell">{row.description}</div>,
        },
        {
            name: 'category',
            selector: row => row.category, // Adjust based on your data structure
            sortable: true,
        },
        {
            name: 'rating',
            selector: row => row.rating.rate, // Adjust based on your data structure
            sortable: true,
        }, {
            name: 'Thumbnail',
            grow: 0,
            cell: row => <img height="84px" width="56px" alt={row.name} src={row.image} />,
},
      
        {
            name: 'rating',
            selector: row => row.rating.count, // Adjust based on your data structure
            sortable: true,
        },
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <DataTable
            title="Country Data"
            columns={columns}
            data={data}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="650px"
            striped
            highlightOnHover
        />
    );
};

export default MasterCountryMstGuid;
