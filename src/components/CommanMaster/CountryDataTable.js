

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';
// import { CircularProgress, Typography, Button, Modal, TextField, Checkbox, FormControlLabel } from '@mui/material';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';
// import CountryDropdown from './CountryDropdown';
// import { ToastContainer, toast } from 'react-toastify';



// const CountryDataTable = () => {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         countryMobileCode: '',
//         countryCode: '',
//         countryNameEn: '',
//         fromDate: '',
//         isRecordActive: false,  // Change to boolean
//         createdDate: ''
//     });

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8086/web/master/getGeoCountryMstList');
//             if (Array.isArray(response.data.data)) {
//                 setData(response.data.data);
//                 setFilteredData(response.data.data);
//             } else {
//                 throw new Error('Unexpected API response format');
//             }
//         } catch (err) {
//             console.error('API Error:', err);
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     useEffect(() => {
//         const result = data.filter(row =>
//             row.countryCode.toLowerCase().includes(search.toLowerCase()) ||
//             row.countryNameEn.toLowerCase().includes(search.toLowerCase()) ||
//             row.countryMobileCode.toLowerCase().includes(search.toLowerCase()) ||
//             row.createdDate.toLowerCase().includes(search.toLowerCase()) ||
//             row.fromDate.toLowerCase().includes(search.toLowerCase())
//         );
//         setFilteredData(result);
//     }, [search, data]);

//     const handleFormChange = (e) => {
//         const { name, type, checked, value } = e.target;

//         if (type === 'checkbox') {
//             setFormData(prevState => ({
//                 ...prevState,
//                 [name]: checked  // Handle checkbox state
//             }));
//         } else if (name === 'fromDate' || name === 'createdDate') {
//             const formattedDate = new Date(value).toISOString().split('T')[0];
//             setFormData(prevState => ({
//                 ...prevState,
//                 [name]: formattedDate
//             }));
//         } else {
//             setFormData(prevState => ({
//                 ...prevState,
//                 [name]: value
//             }));
//         }
//     };
//     // const handleFormChange = (e) => {
//     //     const { name, value } = e.target;
//     //     if (name === 'fromDate' || name === 'createdDate') {
//     //         const formattedDate = new Date(value).toISOString().split('T')[0];
//     //         setFormData(prevState => ({ ...prevState, [name]: formattedDate }));
//     //     } else {
//     //         setFormData(prevState => ({ ...prevState, [name]: value }));
//     //     }
//     // };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (isEditing) {
//                 await axios.put('http://localhost:8086/web/master/submitOrUpdateMstCountry', formData);
//                 toast.success('Country updated successfully!');
//             } else {
//                 await axios.post('http://localhost:8086/web/master/submitOrUpdateMstCountry', formData);
//                 toast.success('Country added successfully!');
//             }
//             fetchData();
//             setShowModal(false);
//             setFormData({
//                 countryMobileCode: '',
//                 countryCode: '',
//                 countryNameEn: '',
//                 fromDate: '',
//                 isRecordActive: '',
//                 createdDate: ''
//             });
//         } catch (error) {
//             console.error('Error submitting country data', error);
//             toast.error('Error submitting country data!');
//         }
//     };

//     const handleEdit = async (row) => {
//         try {
//             const response = await axios.get(`http://localhost:8086/web/master/getMstCountryByGuid/${row.countryMstGuid}`);
//             const countryData = response.data;

//             const formatDate = (date) => new Date(date).toISOString().split('T')[0];
//             setFormData({
//                 ...countryData,
//                 fromDate: formatDate(countryData.fromDate),
//                 createdDate: formatDate(countryData.createdDate)
//             });
//             setIsEditing(true);
//             setShowModal(true);
//         } catch (error) {
//             console.error('Error fetching country details', error);
//             toast.error('Error fetching country details!');
//         }
//     };

//     const handleAddCountry = () => {
//         setFormData({
//             countryMobileCode: '',
//             countryCode: '',
//             countryNameEn: '',
//             fromDate: '',
//             isRecordActive: '',
//             createdDate: ''
//         });
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm('Are you sure you want to delete this country?')) {
//             try {
//                 await axios.delete(`http://localhost:8086/web/master/deleteMstCountry/${id}`);
//                 fetchData();
//                 toast.success('Country deleted successfully!');
//             } catch (error) {
//                 console.error('Error deleting country', error);
//                 toast.error('Error deleting country!');
//             }
//         }
//     };

//     const handleExportToExcel = () => {
//         const ws = XLSX.utils.json_to_sheet(filteredData);
//         const wb = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, 'Countries');
//         XLSX.writeFile(wb, 'CountryList.xlsx');
//         toast.success('Exported to Excel successfully!');
//     };

//     const handleExportToPDF = () => {
//         const doc = new jsPDF();
//         doc.text("Country List", 10, 10);
//         doc.autoTable({
//             startY: 20,
//             head: [['Country Mobile Code', 'Country Code', 'Country Name (English)', 'From Date', 'Is Record Active', 'Created Date']],
//             body: filteredData.map(row => [
//                 row.countryMobileCode,
//                 row.countryCode,
//                 row.countryNameEn,
//                 row.fromDate,
//                 row.isRecordActive,
//                 row.createdDate
//             ]),
//         });
//         doc.save('CountryList.pdf');
//         toast.success('Exported to PDF successfully!');
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography color="error">Error: {error.message}</Typography>;

//     const columns = [
//         {
//             name: 'Country Mobile Code',
//             selector: row => row.countryMobileCode,
//             sortable: true,
//         },
//         {
//             name: 'Country Code',
//             selector: row => row.countryCode,
//             sortable: true,
//         },
//         {
//             name: 'Country Name (English)',
//             selector: row => row.countryNameEn,
//             sortable: true,
//         },
//         {
//             name: 'From Date',
//             selector: row => row.fromDate,
//             sortable: true,
//         },
//         {
//             name: 'Created Date',
//             selector: row => row.createdDate,
//             sortable: true,
//         },
//         {
//             name: 'Actions',
//             cell: row => (
//                 <>
//                     <Button onClick={() => handleEdit(row)} variant="contained" color="primary" size="small" style={{ marginRight: '8px' }}>
//                         Edit
//                     </Button>
//                     <Button onClick={() => handleDelete(row.countryMstGuid)} variant="contained" color="secondary" size="small">
//                         Delete
//                     </Button>
//                 </>
//             )
//         }
//     ];

//     const customStyles = {
//         rows: {
//             style: {},
//         },
//         headCells: {
//             style: {
//                 fontWeight: '600',
//                 fontSize: 'medium',
//                 backgroundColor: 'antiquewhite'
//             },
//         },
//         cells: {
//             style: {},
//         },
//         pagination: {
//             style: {
//                 fontWeight: '600',
//                 fontSize: 'medium',
//                 backgroundColor: 'antiquewhite'
//             }
//         }
//     };

//     return (
//         <div>
//             <DataTable
//                 actions={
//                     <>
//                         <input
//                             label="Search"
//                             variant="outlined"
//                             type="text" className="form-control me-3" placeholder="Search .."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                         <Button variant="contained" color="primary" onClick={handleAddCountry} style={{ marginRight: '8px' }}>
//                             Add Country
//                         </Button>
//                         <Button variant="contained" color="success" onClick={handleExportToExcel} style={{ marginRight: '8px' }}>
//                             Export to Excel
//                         </Button>
//                         <Button variant="contained" color="error" onClick={handleExportToPDF}>
//                             Export to PDF
//                         </Button>
//                     </>
//                 }
//                 title="Country Data"
//                 columns={columns}
//                 data={filteredData}
//                 pagination
//                 striped
//                 fixedHeader
//                 customStyles={customStyles}
//                 fixedHeaderScrollHeight="750px"
//                 selectableRows
//                 highlightOnHover
//             />
//             <Modal open={showModal} onClose={() => setShowModal(false)}>
//                 <div style={{
//                     padding: '20px',
//                     maxWidth: '500px',
//                     margin: '0 auto',
//                     backgroundColor: 'white',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '16px' // Add gap to ensure spacing between form elements
//                 }}>
//                     <Typography variant="h6" gutterBottom>
//                         {isEditing ? 'Edit Country' : 'Add Country'}
//                     </Typography>
//                     <form onSubmit={handleFormSubmit}>
//                         <CountryDropdown />
//                         <TextField
//                             label="Country Mobile Code"
//                             name="countryMobileCode"
//                             value={formData.countryMobileCode}
//                             onChange={handleFormChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Country Code"
//                             name="countryCode"
//                             value={formData.countryCode}
//                             onChange={handleFormChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Country Name (English)"
//                             name="countryNameEn"
//                             value={formData.countryNameEn}
//                             onChange={handleFormChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="From Date"
//                             name="fromDate"
//                             type="date"
//                             value={formData.fromDate}
//                             onChange={handleFormChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <FormControlLabel
//                             control={
//                                 <Checkbox
//                                     name="isRecordActive"
//                                     checked={formData.isRecordActive}
//                                     onChange={handleFormChange}
//                                 />
//                             }
//                             label="Is Record Active"
//                             style={{ marginTop: '16px' }} // Optional: Add margin if needed
//                         />
//                         <TextField
//                             label="Created Date"
//                             name="createdDate"
//                             type="date"
//                             value={formData.createdDate}
//                             onChange={handleFormChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
//                             {isEditing ? 'Update Country' : 'Add Country'}
//                         </Button>
//                     </form>
//                 </div>
//             </Modal>
//             <ToastContainer
//                 position="top-center"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"




//             />
//         </div>
//     );
// };

// export default CountryDataTable;






