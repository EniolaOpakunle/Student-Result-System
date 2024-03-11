import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [name, setName] = useState('');
    const [matric, setMatric] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('')
    const [department, setdepartment] = useState('')
    const [faculty, setfaculty] = useState('')
    const [grade, setgrade] = useState('')
    const [courses, setCourses] = useState([]);
    const [message, setmessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        let found = storedStudents.find(val => matric == val.matric )
        if(found){
          setmessage(`${matric} already registered`)
        }
        else{
          const newStudent = {
            name,
            matric,
            gender,
            dob,
            department,
            faculty,
            courses: courses.map((course) => ({
              id: new Date().getTime() + Math.random() * 1000,
              name: course.name,
              score: course.score,
              code: course.code,
              grade: course.grade,
            })),
          };
          storedStudents.push(newStudent);
          localStorage.setItem('students', JSON.stringify(storedStudents));
          navigate('/login')
        }
      };
  return (
    <div className='container-fluid addStudent p-4'>
        <div className='header'>
        <h4 className='text-center'>Student Registration form</h4>
        </div>
        <div className='mt-5 details'>
            <form onSubmit={handleSubmit} className='row justify-content-center'>
                <div className='col-lg-6 mt-2'>
                    <label className='form-label'>Name</label>
                    <input
                    type="text"
                    className='form-control w-75'
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className='col-lg-5 mt-2'>
                    <label className='form-label'>Matric Number</label>
                    <input
                    type='number'
                    className='form-control w-75'
                    placeholder="Matric No"
                    value={matric}
                    onChange={(e) => setMatric(e.target.value)}
                    required
                    />
                </div>
                <div className='col-lg-6 mt-2'>
                    <label className='form-label'>Department</label>
                    <input 
                    type="text"
                    className='form-control w-75'
                    placeholder='Department'
                    value={department}
                    onChange={(e) => setdepartment(e.target.value)}
                    />
                </div>
                <div className='col-lg-5 mt-2'>
                    <label>Date Of Birth</label>
                    <input 
                    type="date" 
                    className='form-control w-75'
                    placeholder='Date of Birth'
                    value={dob}
                    onChange={(e) => setdob(e.target.value)} 
                    required
                    />
                </div>
                <div className='col-lg-6 mt-2'>
                    <label className='form-label'>Faculty</label>
                    <input 
                    type="text"
                    className='form-control w-75'
                    placeholder='Faculty'
                    value={faculty}
                    onChange={(e) => setfaculty(e.target.value)}
                    />
                </div>
                <div className='col-lg-5 mt-2 form-group'>
                    <label className='form-label'>Gender</label>
                    <form action=""onChange={(e) => setgender(e.target.value)} className='d-flex'>
                        <p>
                        <input 
                        type="radio" 
                        value='male'/>
                        Male
                        </p>
                        <p>
                        <input 
                        type="radio" 
                        value='female'
                        />
                        Female
                        </p>
                        
                    </form>
                </div>
                <div className='col-lg-4 mt-3'>
                    <button type="submit" className=' w-100 p-1 btn-dark'>Save</button>
                </div>
            </form>
      </div>   
      <div className='mt-3'>
        <p className='text-danger'>{message}</p>
      </div>
    </div>
  )
}

export default Register