import React from 'react'
import { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import contactImage from '../images/contact.png';

function Result(){
    const [student, setstudent] = useState({})
    const [intScore, setintScore] = useState()
    const [totalScore, settotalScore] = useState('')
    const [cgpa, setcgpa] = useState('')
        const {state} = useLocation()

  return (
    <div className='result container-fluid px-4 py-3'>
        <div className='header d-flex'>
            <h6>Results</h6>
            <h6 className='title'>{state.name}: <span className=''>{state.matric}</span></h6>
        </div>
        <div className='mt-4 result-div'>
            <table className='w-100 '>
                <thead className=''>
                    <tr className=''>
                        <th className='col-lg-1 col-sm-1'>S/N</th>
                        <th className='col-lg-2 col-sm-2'>Course code</th>
                        <th className='col-lg-4 col-sm-4'>Course Title</th>
                        <th className='col-lg-2'>Score</th>
                        <th className='col-lg-2'>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {state.courses.map((course, index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className='code'>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.score}</td>
                            <td>{course.grade}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <tr className='row justify-content-space-between py-3'>
                <td className='col-lg-4'>Total Course Taken: <span>{state.courses.length}</span></td>
                <td className='col-lg-4'>CGPA:</td>
                <td className='col-lg-4'>Total Credit:</td>
            </tr>
        </div>
        <div className='row info mt-5 px-2'>
            <div className='col-lg-1 image mt-5'>
                <img src={contactImage} alt="image" />
            </div>
            <div className='col-lg-6 p-4'>
                <div className='d-flex'>
                    <div className='mt-2'>
                        <img src={contactImage} alt="" className='w-50' />
                    </div>
                    <div>
                        <h6>Student Basic Info</h6>
                        <p>Ladoke Akintola University of Technology</p>
                    </div>
                </div>
                <div>
                    <p>Name: <span>{state.name}</span></p>
                    <p>Department: <span>{state.department}</span></p>
                    <p>Faculty: <span>{state.faculty}</span></p>
                    <p>Matric No: <span>{state.matric}</span></p>
                    <p>Gender: <span>{state.gender}</span></p>
                </div>
            </div>
            <div className='col-lg-4 course p-4 mx-3'>
                <h6 className='mb-2'>Courses Registered</h6>
                {state.courses.map((course, index) => (
                    <ul>
                        <li>{course.name}</li>
                    </ul>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Result