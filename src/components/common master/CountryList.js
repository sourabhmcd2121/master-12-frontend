

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const CountryList = () => {
    const [data, setData] = useState([]); // State variable for data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8086/web/master/getAllGeoCountryList')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            name: 'countryCode',
            selector: row => row.countryCode || 'N/A', // Fallback to 'N/A' if undefined
            sortable: true,
        },
        {
            name: 'countryNameEn',
            selector: row => row.countryNameEn || 'N/A', // Fallback to 'N/A' if undefined
            sortable: true,
        },
        {
            name: 'countryNameHi',
            selector: row => row.countryNameHi || 'N/A', // Fallback to 'N/A' if undefined
            sortable: true,
        },

        {
            name: 'countryNameRl ',
            selector: row => row.countryNameRl || 'N/A', // Fallback to 'N/A' if undefined
            sortable: true,
        },

        {
            name: 'countryDescription',
            selector: row => row.countryDescription || 'N/A',
            sortable: true,
        },
        {
            name: 'fromDate',
            selector: row => row.fromDate || 'N/A',
            sortable: true,
        },
        {
            name: 'To Date',
            selector: row => row.toDate || 'N/A',
            sortable: true,
        },

          {
              name: 'createdDate',
              selector: row => row.createdDate || 'N/A',
            sortable: true,
        }



    ];

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable
                    title="Geo Country List"
                    columns={columns}
                    data={data}
                    pagination

                    selectableRows
                />
            )}
        </div>
    );
};

export default CountryList;
