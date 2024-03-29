import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Result from './Result';

function StudentLogin() {
    const [MatricNo, setMatricNo] = useState('')
    const [message, setmessage] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const storedStudents = JSON.parse(localStorage.getItem('students')) || []
        let found = storedStudents.find((val, index) => (MatricNo == val.matric))
        if (found){
            navigate('/result', {state: found})
        }
        else{
            setmessage('Wrong matric no or student not registered')
        }
    }
    const handleAdminLogin = () =>{
      navigate('/adminlogin')
    }
  return (
    <div className='login p-4'>
      <div className='header mt-1 d-flex' >
        <h6>Student Login Portal <span>@Lautech</span></h6>
        {/* <h6>@LAUTECH</h6> */}
        <div>
          <button onClick={() => handleAdminLogin()}>Log in as Admin</button>
        </div>
      </div>
      <div className='w-50 m-auto mt-5 p-5 form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor=""><h6>Matric No</h6></label>
            <input 
            type="text" 
            className='form-control w-100 mt-2'
            placeholder='Matric No'
            value={MatricNo}
            onChange={(e) => setMatricNo(e.target.value)}
            required
            />
            <button type='submit' className='mt-3 px-4 py-1'>Login</button>
          </form>  
          <div className='mt-3'>
            <h6 className='text-danger'>{message}</h6>
          </div>
          <div className='mt-3'>
            <p>Not registered? <a href="/register">Register here</a> </p>
          </div>
          {/* <div>
            <p className='text-end'>Log in as <a href="/adminlogin">Admin</a></p>
          </div> */}
      </div>
    </div>
  )
}

export default StudentLogin