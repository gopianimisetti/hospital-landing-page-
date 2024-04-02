

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Navbarr from './Navbar';

const Patientdetails = ({ loggedIn, onLogout }) => {
  const [allFormData, setAllFormData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [filteredFormData, setFilteredFormData] = useState([]);

  useEffect(() => {
    const storedAllFormData = localStorage.getItem('allFormData');
    if (storedAllFormData) {
      setAllFormData(JSON.parse(storedAllFormData));
    }
  }, []);

  useEffect(() => {
    let filteredData = allFormData;

    if (searchName !== '') {
      filteredData = filteredData.filter(formData =>
        formData.patientName.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchGender !== '') {
      filteredData = filteredData.filter(formData =>
        formData.gender.toLowerCase() === searchGender.toLowerCase()
      );
    }

    setFilteredFormData(filteredData);
  }, [searchName, searchGender, allFormData]);

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchGenderChange = (e) => {
    setSearchGender(e.target.value);
  };

  const sortedFormData = filteredFormData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Navbarr loggedIn={loggedIn} onLogout={onLogout} />

      <div style={{ textAlign: "center", backgroundColor: "white", padding: "20px" }}>
        <h3 style={{ marginBottom: "20px" }}>All Patient Information</h3>
        <div style={{ marginBottom: "20px" }}>
          <input style={{ borderRadius: "10px" }} type="text" placeholder='Enter Patient name' value={searchName} onChange={handleSearchNameChange} />
          <select style={{ marginLeft: "10px"  ,borderRadius:"10px"}} value={searchGender} onChange={handleSearchGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Phone Number</th>
              <th>Patient Age</th>
              <th>Gender</th>
              <th>Selected Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedFormData.map((formData, index) => (
              <tr key={index}>
                <td>{formData.patientName}</td>
                <td>{formData.phoneNumber}</td>
                <td>{formData.patientAge}</td>
                <td>{formData.gender}</td>
                <td>{formData.time}</td>
                <td>{formData.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Patientdetails;


