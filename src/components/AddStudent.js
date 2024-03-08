import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const AddStudent = ({object}) => {
  const [editObj, seteditObj] = useState({})
  const [name, setName] = useState('');
  const [matric, setMatric] = useState('');
  const [gender, setgender] = useState('');
  const [dob, setdob] = useState('')
  const [department, setdepartment] = useState('')
  const [faculty, setfaculty] = useState('')
  const [grade, setgrade] = useState('')
  const [courses, setCourses] = useState([]);
  const [message, setmessage] = useState('')
  const [editMode, seteditMode] = useState(false)
  const navigate = useNavigate()
  

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
  
      navigate('/admindashboard')
    }
  };

  const determineGrade = (score) => {
    if (score >= 90 && score <= 100) {
      return 'A';
    } else if (score >= 80 && score <= 89) {
      return 'B';
    } else if (score >= 70 && score <= 79) {
      return 'C';
    } else if (score >= 60 && score <= 69) {
      return 'D';
    } else if (score >= 50 && score <= 59) {
      return 'E';
    } else if(score == ''){
      return 'AR';
    } else {
      return 'F';
    }
  }

  const handleAddCourse = () => {
    setCourses([...courses, { name: '', score: '', code: '', grade:'' }]);
  };

  const handleRemoveCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    newCourses[index].grade = determineGrade(newCourses[index].score)
    setCourses(newCourses);
  };

  return (
    <div className=' container-fluid addStudent p-4'>
      <div className='header'>
        <h4 className='text-center'>Student Registration form</h4>
      </div>
      <div className='mt-5'>
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
            {/* Error message */}
            <div className='mt-3'>
              <p>{message}</p>
            </div>
        {/* Add course */}
        <div className='mt-5'>
          {courses.map((course, index) => (
            <form key={index} className='d-flex courseForm'>
                <div className='col-lg-3'>
                    <label htmlFor="" className='form-label'>Course Title</label>
                    <input
                    type="text"
                    className='form-control'
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
                    required
                    />
                </div>
                <div className='col-lg-2'>
                    <label htmlFor="" className='form-label'>Course Code</label>
                    <input 
                    type="text" 
                    className='form-control'
                    placeholder='Course Code'
                    value={course.code}
                    onChange={(e) => handleCourseChange(index, 'code', e.target.value)}
                    required
                    />
                </div>
                <div className='col-lg-2'>
                    <label htmlFor="" className='form-label'>Score</label>
                    <input
                    type="number"
                    className='form-control'
                    placeholder="Score"
                    value={course.score}
                    onChange={(e) => handleCourseChange(index, 'score', e.target.value)}
                    />
                </div>
                <div className='col-lg-2'>
                    <label htmlFor="" className='form-label'>Grade</label>
                    <input 
                    type="text"
                    className='form-control'
                    placeholder='Grade'
                    value={determineGrade(course.score)}
                    disabled
                    // onChange={() => } 
                    />
                </div>
                <div className='col-lg-3'>
                    <button type="button " className='form-control btn-dark' onClick={() => handleRemoveCourse(index)}>
                        Remove Course
                    </button>
                </div>
            </form>
          ))}
        </div>
        <div className='row mt-3 justify-content-center'>
            <div className='col-lg-4'>
              <button type="button" className=' w-100 p-1 btn-light' onClick={handleAddCourse}>
                  Add Course
              </button>
            </div>
            <div className='col-lg-4'>
              <button type="submit" className=' w-100 p-1 btn-dark'>Save</button>
            </div>
        </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddStudent;