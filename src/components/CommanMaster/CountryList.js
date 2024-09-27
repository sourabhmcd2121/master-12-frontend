

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button, Modal, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountryDropdown from "./CountryDropdown";
import * as XLSX from 'xlsx'; // Ensure this line is present

// ... rest of your component


const customStyles = {
    header: {
        style: {
            minHeight: '56px',
            backgroundColor: '#6fc7fa',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
        },
    },
    rows: {
        style: {
            minHeight: '48px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: '#b8d6ee',
            color: '#333',
            fontSize: '15px',
            fontWeight: 'bold',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
    pagination: {
        style: {
            borderTopStyle: 'solid',
            borderTopWidth: '2px',
            borderTopColor: '#ccc',
            padding: '8px',
            backgroundColor: '#6fc7fa',
        },
    },
};

const CountryDataTable = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [formData, setFormData] = useState({

       
        masterCountry:"",
        countryMasterGuid: "",
        countryMobileCode: "",
        countryCode: "",
        countryNameEn: "",
        toDate: "",
        fromDate: "",
        isRecordActive: false,
        createrRemarks:"",
    });
   
    const handleCountrySelect = (code) => {
        setFormData({
            ...formData,
            "countryMasterGuid": code,
        });
        // You can also perform additional actions here if needed
      };
    

    const fetchCountries = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:8086/web/master/getGeoCountryMstList");
            setCountries(response.data.data);
            setFilteredData(response.data.data);
        } catch (error) {
            console.error("Error fetching country data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        const filtered = countries.filter(country =>
            country.countryNameEn.toLowerCase().includes(value) ||
            country.countryCode.toLowerCase().includes(value) ||
            country.countryMobileCode.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const handleFormChange = (e) => {
         //debugger;
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:8086/web/master/submitOrUpdateMstCountry", formData);
    //         toast.success(selectedCountry ? "Country updated successfully!" : "Country added successfully!");
    //         fetchCountries();
    //         handleClose();
    //         // //console.log(response)
    //     } catch (error) {
    //         toast.error("Error submitting country data: " + (error.response?.data?.message || "Unknown error"));
    //     }
    // };





    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post("http://localhost:8086/web/master/submitOrUpdateMstCountry", formData);
            //console.log(response.data);  // You can inspect the response or use it for further operations.
            toast.success(selectedCountry ? "Country updated successfully!" : "Country added successfully!");
            fetchCountries();
            handleClose();
        } catch (error) {
            toast.error("Error submitting country data: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    // const handleEdit = (country) => {
    //       const formatDate = (dateString) => {
    //     if (!dateString) return '';
    //     const date = new Date(dateString);
    //     return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
    // };
    //     setSelectedCountry(country);
    //     setFormData({
    //         masterCountry: country.countryNameEn,
    //         countryMasterGuid: country.countryMasterGuid,
    //         countryMobileCode: country.countryMobileCode,
    //         countryCode: country.countryCode,
    //         countryNameEn: country.countryNameEn,
    //         fromDate: country.fromDate,
    //         toDate: country.toDate,
    //         isRecordActive: country.isRecordActive,
    //         createrRemarks: country.createrRemarks,
    //     });
    //     setOpen(true);
    // };

    const handleEdit = (country) => {
        const formatDate = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
        };
   
        //console.log(country);
        //setSelectedCountry(country);
        //handleChange(null,);

        setSelectedCountryCode(country.masterGeoCountryMaster ?country.masterGeoCountryMaster.countryMasterGuid:"");
        setFormData({
            countryMstGuid: country.countryMstGuid,
            masterCountry: country.masterGeoCountryMaster ?country.masterGeoCountryMaster.countryNameEn:"",
          //  countryMasterGuid: country.masterGeoCountryMaster ?country.masterGeoCountryMaster.countryMasterGuid:"",
            countryMobileCode: country.countryMobileCode,
            countryCode: country.countryCode,
            countryNameEn: country.countryNameEn,
            fromDate: formatDate(country.fromDate), // Format the fromDate
            toDate: formatDate(country.toDate),     // Format the toDate
            isRecordActive: country.isRecordActive,
            createrRemarks: country.createrRemarks,
           
          
        });
        console.log(country);
        setOpen(true);
    };
    

    const handleDelete = async (countryId) => {
        try {
            await axios.delete(`http://localhost:8086/web/master/deleteMstCountry/${countryId}`);
            toast.success("Country deleted successfully!");
            fetchCountries();
        } catch (error) {
            toast.error("Error deleting country: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedCountry(null);
        setFormData({
            masterCountry: "",
            countryMasterGuid: "",
            countryMobileCode: "",
            countryCode: "",
            countryNameEn: "",
            toDate: "",
            fromDate: "",
            createrRemarks: "",
            isRecordActive: false,
        });
    };

 
//orignal data
    // const handleExportToExcel = () => {
    //     const ws = XLSX.utils.json_to_sheet(filteredData);
    //     const wb = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(wb, ws, 'Countries');
    //     XLSX.writeFile(wb, 'CountryList.xlsx');
    //     toast.success('Exported to Excel successfully!');
    // };


   ///data show in excel by field which you want to show
    const handleExportToExcel = () => {
        try {
            // Flatten the data structure
            const combinedData = filteredData.map(item => {
                return {
                     // Extract fields from masterGeoCountryMaster if present
                    masterCountry:item.masterGeoCountryMaster ? item.masterGeoCountryMaster.countryNameEn : 'N/A',

                    countryMstGuid: item.countryMstGuid,
                    countryMobileCode: item.countryMobileCode,
                    countryCode: item.countryCode,
                    countryNameEn: item.countryNameEn,
                     fromDate: item.fromDate ? new Date(item.fromDate).toLocaleDateString('en-GB') : 'N/A',
                    toDate: item.toDate ? new Date(item.toDate).toLocaleDateString('en-GB') : 'N/A',
                    isRecordActive: item.isRecordActive,
                  
                   
                 
                };
            });
    
            // Create an Excel sheet and write to a file
            const ws = XLSX.utils.json_to_sheet(combinedData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Countries');
            XLSX.writeFile(wb, 'CountryList.xlsx');
    
            toast.success('Exported to Excel successfully!');
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            toast.error('Failed to export to Excel.');
        }
    };
    

    const handleExportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Country List", 10, 10);
        doc.autoTable({
            startY: 20,
            head: [['Master Country,Country Mobile Code', 'Country Code', 'Country Name (English)', 'From Date', 'To Date', 'Is Record Active', 'Created Date']],
            body: filteredData.map(row => [
                row.countryMasterGuid,
                row.countryNameEn,
                row.countryMobileCode,
                row.countryCode,
                row.countryNameEn,
                new Date(row.fromDate).toLocaleDateString('en-GB'),
                new Date(row.toDate).toLocaleDateString('en-GB'),
                row.isRecordActive ? 'Yes' : 'No',
               
            ]),
        });
        doc.save('CountryList.pdf');
        toast.success('Exported to PDF successfully!');
    };

    const handleCheckboxChange = async (country) => {
        const updatedCountry = {
            ...country,
            isRecordActive: !country.isRecordActive  // Toggle the isRecordActive status
        };
        
        try {
            // Update the country data with the toggled status
            await axios.post("http://localhost:8086/web/master/submitOrUpdateMstCountry", updatedCountry);
            toast.success(`Country status updated to ${updatedCountry.isRecordActive ? 'Active' : 'Inactive'}`);
            
            // Refresh the country list after updating
            fetchCountries();
        } catch (error) {
            toast.error("Error updating country status: " + (error.response?.data?.message || "Unknown error"));
        }
    };
    

    const columns = [
        {
            name: "Master Country",
            selector: (row) => row.masterGeoCountryMaster?.countryNameEn || 'N/A',
            sortable: true,
        },
        {
            name: "Country Mobile Code",
            selector: (row) => row.countryMobileCode,
            sortable: true,
        },
        {
            name: "Country Code",
            selector: (row) => row.countryCode,
            sortable: true,
        },
        {
            name: "Country Name (English)",
            selector: (row) => row.countryNameEn,
            sortable: true,
        },
        {
            name: "From Date",
            selector: (row) => new Date(row.fromDate).toLocaleDateString('en-GB'),
            sortable: true,
        },
        // {
        //     name: "To Date",
        //     selector: (row) => new Date(row.toDate).toLocaleDateString('en-GB'),
        //     sortable: true,
        // },

        {
            name: "To Date",
            selector: (row) => row.toDate 
                ? new Date(row.toDate).toLocaleDateString('en-GB') 
                : '', // Fallback for null or undefined toDate
            sortable: true,
        },
        
      


        {
            name: "isRecordActive",
            selector: (row) => (
                <Checkbox 
                    checked={row.isRecordActive}  // Checkbox selected if active
                    onChange={() => handleCheckboxChange(row)}  // Call a function to handle change
                    color="primary"
                />
            ),
            sortable: true,
        },
        


        // {
        //     name: "Creater Remarks",
        //     selector: (row) => row.createrRemarks,
        //     sortable: true,
        // },
        {

            name: "Actions",
            cell: (row) => (
                <>
                    <Button onClick={() => handleEdit(row)} variant="contained" color="primary" style={{ marginRight: "10px" }}>
                        Edit
                    </Button>
                    <Button onClick={() => handleDelete(row.countryMstGuid)} variant="contained" color="secondary">
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <ToastContainer />
            <DataTable
                title="Country Data"
                columns={columns}
                data={filteredData}
                actions={
                    <>
                        <input
                            type="text"
                            className="form-control me-3"
                            placeholder="&#x1F50D; Search .."
                            value={search}
                            onChange={handleSearch}
                        />
                        <Button variant="contained" className="me-2" color="primary" onClick={handleOpen}>
                            Add Country
                        </Button>
                        <Button variant="contained" color="success" onClick={handleExportToExcel} style={{ marginRight: '8px' }} startIcon={<ListAltIcon />}>
                            Excel
                        </Button>
                        <Button variant="contained" color="error" onClick={handleExportToPDF} startIcon={<PictureAsPdfIcon />}>
                            PDF
                        </Button>
                    </>
                }
                customStyles={customStyles}
                progressPending={loading}
                fixedHeader
                fixedHeaderScrollHeight="650px"
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30]}
                paginationComponentOptions={{
                    rowsPerPageText: 'Rows per page:',
                    rangeSeparatorText: 'of',
                    selectAllRowsItem: true,
                    selectAllRowsItemText: 'All',
                }}
            />

            {/* Modal for Add/Edit */}
            <Modal open={open} onClose={handleClose}>
                <div style={{ padding: "20px", backgroundColor: "white", margin: "10% auto", width: "400px" }}>
                    <h2>{selectedCountry ? "Edit Country" : "Add Country"}</h2>
                    <form onSubmit={handleFormSubmit}>
                        {/* { <CountryDropdown
                            selectedCountry={formData.selectedCountry}
                            onCountryChange={(value) => {
                                setFormData(prevState => ({
                                    ...prevState,
                                    selectedCountry: value,
                                    countryCode: value?.code || '',
                                    countryNameEn: value?.name || ''
                                }));
                            }}
                        />} */}

<CountryDropdown onCountrySelect={handleCountrySelect}  selectedCountryValue={selectedCountryCode}/>
                      

                        <TextField
                            label="Country Mobile Code"
                            name="countryMobileCode"
                            value={formData.countryMobileCode}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Country Code"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Country Name (English)"
                            name="countryNameEn"
                            value={formData.countryNameEn}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="date"
                            label="From Date"
                            name="fromDate"
                            value={formData.fromDate}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <TextField
                            type="date"
                            label="To Date"
                            name="toDate"
                            value={formData.toDate}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="isRecordActive"
                                    checked={formData.isRecordActive}
                                    onChange={handleFormChange}
                                />
                            }
                            label="Is Record Active"
                        />
                        <TextField
                            label="creater Remarks"
                            name="createrRemarks"
                            value={formData.createrRemarks}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            {selectedCountry ? "Update Country" : "Add Country"}
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CountryDataTable;
