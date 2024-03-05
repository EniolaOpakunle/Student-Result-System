import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import "./App.css"

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
      }, []);
        
    const handleAdd = () =>{
        navigate('/add-student')
    }
    const handleDelete = (e) =>{
      let updatedStudents = students.filter((val, index) => e != index)
      setStudents(updatedStudents)
    }
  return (
    <>
    <div className='container-fluid dashboard p-3'>
      <div className='d-flex header'>
        <h5>Dashboard</h5>
        <div>
          <button className='button rounded px-3 py-1 mx-2' onClick={() => handleAdd()}>Add Student</button> 
          <button className='button px-3 py-1 rounded'>Log out</button>
        </div>
      </div>
      <div className='d-flex mt-5'>
        <div className='card col-lg-3 p-3'>
          <p>Total students</p>
          <div className='d-flex'>
            <h3>{students.length}</h3>
            <p className='percentage'>100%</p>
          </div>
        </div>
        <div className='card col-lg-3 p-3'>
          <p>Total students</p>
          <div className='d-flex'>
            <h3>{students.length}</h3>
            <p className='percentage'>100%</p>
          </div>
        </div>
        <div className='card col-lg-3 p-3'>
          <p>Total students</p>
          <div className='d-flex'>
            <h3>{students.length}</h3>
            <p className='percentage'>100%</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='d-flex'>
         <h4>Students</h4>
         <input 
         className='col-lg-3'
         type="text" 
         placeholder='search'
         />
        </div>
        <div className='mt-3'>
          <table>
            <thead>
              <tr className=''>
                <th className='col-lg-1'>S/N</th>
                <th className='col-lg-2'>Matric No</th>
                <th className='col-lg-4'>Student Name</th>
                <th className='col-lg-2' >Gender</th>
                <th className='col-lg-2'>Date of Birth</th>
                <th className='col-lg-1'></th>
                <th className='col-lg-1'></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className=''>
                  <td>{index + 1}</td>
                  <td>{student.matric}</td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.dob}</td>
                  <td><button className=' button rounded px-3'>Edit</button></td>
                  <td><button className=' button rounded px-3' onClick={() => handleDelete(index)}>delete</button></td>
                </tr>
              ))}
              {/* <tr>Total Course Taken: </tr>  */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
};

export default AdminDashboard;