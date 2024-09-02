
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Modal, Button } from 'react-bootstrap';
import CountryForm from './CountryForm';

const CountryDataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(null);

    // Fetch country data
    const fetchCountryData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8086/web/master/getAllGeoCountryList');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching country data', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    // Handle form submission for create/update
    const handleFormSubmit = async (formData) => {
        try {





            await axios.post('http://localhost:8086/web/master/submitOrUpdateGeoCountry', formData);

            fetchCountryData(); // Refresh data after submission
            setShowModal(false);
        } catch (error) {
            console.error('Error submitting country data', error);
        }
    };

    // Handle delete operation
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this country?')) {
            try {



                await axios.delete(`http://localhost:8086/web/master/deleteMasterGeoCountry/${id}`);
                fetchCountryData(); // Refresh data after deletion
            } catch (error) {
                console.error('Error deleting country', error);
            }
        }
    };

    // Handle edit button click
    const handleEdit = (row) => {
        setFormData(row); // Populate form with existing data for editing
        setShowModal(true);
    };

    // Handle Add Country button click
    const handleAddCountry = () => {
        setFormData(null); // Clear the form data for a new entry
        setShowModal(true);
    };

    const columns = [
        { name: 'Country Code', selector: row => row.countryCode, sortable: true },
        { name: 'Country Name (English)', selector: row => row.countryNameEn, sortable: true },
        { name: 'Country Name (Hindi)', selector: row => row.countryNameHi, sortable: true },
        { name: 'Country Name (Regional)', selector: row => row.countryNameRl, sortable: true },
        { name: 'Country Description', selector: row => row.countryDescription, sortable: true },
        { name: 'From Date', selector: row => row.fromDate, sortable: true },
        { name: 'To Date', selector: row => row.toDate, sortable: true },
        { name: 'Created Date', selector: row => row.createdDate, sortable: true },
        {
            name: 'Actions',
            cell: row => (
                <>
                    <button onClick={() => handleEdit(row)} className="btn btn-primary btn-sm me-2">Edit</button>
                    {' '}
                    <button onClick={() => handleDelete(row.countryMasterGuid)} className="btn btn-danger btn-sm">Delete</button>
                </>
            )
        }
    ];

    return (
        <div>
            <Button variant="primary" onClick={handleAddCountry}>Add Country</Button>
            <DataTable
                title="Country List"
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
            />

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData ? 'Edit Country' : 'Add Country'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CountryForm
                        initialData={formData}
                        onSuccess={handleFormSubmit}
                        onCancel={() => setShowModal(false)}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CountryDataTable;

