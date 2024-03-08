import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setmessage] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'teacher' && password === 'password') {
    navigate('/admindashboard')
    }
    else{
      setmessage('Invalid username or password')
    }
  };

  return (
    // Implement the login form and submit logic here
    <div className='p-5 admin'>
      <div className='d-flex'>
        <h6>Admin Login Portal</h6>
        <h6>@Lautech</h6>
      </div>
      <div className='w-50 border p-5 m-auto mt-5 form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Admin Name</label>
        <input
          type="text"
          className = "form-control p-2 mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className='form-control p-2 mb-3'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='px-4  py-2 rounded-pill btn btn-primary'>Login</button>
        </form>
        <h6 className='mt-3 text-danger'>{message}</h6>
      </div>
    </div>
  );
};

export default AdminLogin;