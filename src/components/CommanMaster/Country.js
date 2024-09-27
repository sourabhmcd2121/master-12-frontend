// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Country = () => {
//   const [countries, setCountries] = useState([]);
//   const [records, setRecords] = useState([]);
//   const [formData, setFormData] = useState({
//     countryMstGuid: '',
//     countryNameEn: '',
//     countryCode: '',
//     countryMobileCode: '',
//     isRecordActive: false, // Checkbox for isActive
//     fromDate: '', // New date field
//     toDate: '',   // New date field
//   });
//   const [editing, setEditing] = useState(false);

//   // Fetch country names for dropdown
//   useEffect(() => {
//     axios.get('/getCountryNameList')
//       .then(response => {
//         if (response.data.status) {
//           setCountries(response.data.countryNameList);
//         } else {
//           alert('Error fetching country names');
//         }
//       })
//       .catch(error => console.error('Error fetching countries', error));
//   }, []);

//   // Fetch all records
//   useEffect(() => {
//     axios.get('/getGeoCountryMstList')
//       .then(response => {
//         if (response.data.status) {
//           setRecords(response.data.data);
//         } else {
//           alert('Error fetching records');
//         }
//       })
//       .catch(error => console.error('Error fetching records', error));
//   }, []);

//   // Handle form change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // If it's a checkbox, set the value based on checked
//     if (type === 'checkbox') {
//       setFormData(prev => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   // Add or Update record
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const apiEndpoint = editing ? '/submitOrUpdateMstCountry' : '/submitOrUpdateMstCountry';
    
//     axios.post(apiEndpoint, formData)
//       .then(response => {
//         if (response.data.status) {
//           alert('Record saved successfully');
//           setFormData({
//             countryMstGuid: '',
//             countryNameEn: '',
//             countryCode: '',
//             countryMobileCode: '',
//             isRecordActive: false, // Reset checkbox
//             fromDate: '',  // Reset date
//             toDate: '',    // Reset date
//           });
//           setEditing(false);
//           refreshRecords(); // Refresh records
//         } else {
//           alert('Error saving record');
//         }
//       })
//       .catch(error => console.error('Error saving record', error));
//   };

//   // Fetch the updated records
//   const refreshRecords = () => {
//     axios.get('/getGeoCountryMstList')
//       .then(response => {
//         if (response.data.status) {
//           setRecords(response.data.data);
//         }
//       })
//       .catch(error => console.error('Error fetching records', error));
//   };

//   // Delete a record
//   const handleDelete = (id) => {
//     axios.delete(`/deleteMstCountry/${id}`)
//       .then(response => {
//         if (response.data.status) {
//           alert('Record deleted successfully');
//           refreshRecords();
//         } else {
//           alert('Error deleting record');
//         }
//       })
//       .catch(error => console.error('Error deleting record', error));
//   };

//   // Handle Edit (populate the form with the selected record's data)
//   const handleEdit = (record) => {
//     setFormData({
//       ...record,
//       isRecordActive: record.isRecordActive || false, // Ensure it gets the correct value for the checkbox
//       fromDate: record.fromDate ? record.fromDate.split('T')[0] : '',  // Format date for input
//       toDate: record.toDate ? record.toDate.split('T')[0] : '',        // Format date for input
//     });
//     setEditing(true);
//   };

//   return (
//     <div>
//       <h1>CRUD Operation</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Country Name</label>
//           <select name="countryMstGuid" value={formData.countryMstGuid} onChange={handleChange}>
//             <option value="">Select Country</option>
//             {Object.entries(countries).map(([guid, name]) => (
//               <option key={guid} value={guid}>{name}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Country Name (English)</label>
//           <input
//             type="text"
//             name="countryNameEn"
//             value={formData.countryNameEn}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Country Code</label>
//           <input
//             type="text"
//             name="countryCode"
//             value={formData.countryCode}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Country Mobile Code</label>
//           <input
//             type="text"
//             name="countryMobileCode"
//             value={formData.countryMobileCode}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>From Date</label>
//           <input
//             type="date"
//             name="fromDate"
//             value={formData.fromDate}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>To Date</label>
//           <input
//             type="date"
//             name="toDate"
//             value={formData.toDate}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Is Active</label>
//           <input
//             type="checkbox"
//             name="isRecordActive"
//             checked={formData.isRecordActive}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">{editing ? 'Update' : 'Add'} Country</button>
//       </form>

//       <h2>All Records</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Country Name</th>
//             <th>Country Code</th>
//             <th>Mobile Code</th>
//             <th>From Date</th>
//             <th>To Date</th>
//             <th>Is Active</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map(record => (
//             <tr key={record.countryMstGuid}>
//               <td>{record.countryNameEn}</td>
//               <td>{record.countryCode}</td>
//               <td>{record.countryMobileCode}</td>
//               <td>{record.fromDate ? record.fromDate.split('T')[0] : ''}</td>
//               <td>{record.toDate ? record.toDate.split('T')[0] : ''}</td>
//               <td>{record.isRecordActive ? 'Yes' : 'No'}</td>
//               <td>
//                 <button onClick={() => handleEdit(record)}>Edit</button>
//                 <button onClick={() => handleDelete(record.countryMstGuid)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Country;
