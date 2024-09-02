import React, { useState, useEffect } from 'react';


const CountryForm = ({ initialData = {}, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        countryCode: '',
        countryNameEn: '',
        countryNameHi: '',
        countryNameRl: '',
        countryDescription: '',
        fromDate: '',
        toDate: '',
        createdDate: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value



        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSuccess(formData);
        debugger;
        console.log("data onSuccess: " + formData)

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Country Code</label>
                    <input type="text" name="countryCode" className="form-control" value={formData.countryCode} onChange={handleChange} required />
                </div>



                <div className="form-group">
                    <label>Country Name (English):</label>
                    <input type="text" name="countryNameEn" className="form-control" value={formData.countryNameEn} onChange={handleChange} required />
                </div>
                <div className="form-group" >
                    <label>Country Name (Hindi):</label>
                    <input type="text" name="countryNameHi" className="form-control" value={formData.countryNameHi} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Country Name (Regional):</label>
                    <input type="text" name="countryNameRl" className="form-control" value={formData.countryNameRl} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Country Description:</label>
                    <textarea name="countryDescription" className="form-control" value={formData.countryDescription} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>From Date:</label>
                    <input type="date" name="fromDate" className="form-control" value={formData.fromDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>To Date:</label>
                    <input type="date" name="toDate" className="form-control" value={formData.toDate} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Created Date</label>
                    <input type="date" name="createdDate" className="form-control" value={formData.createdDate} onChange={handleChange} />
                </div>

                <button type="submit " className='mb-2 btn-success'>Submit</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>




        </div>
        


    );
};

export default CountryForm;