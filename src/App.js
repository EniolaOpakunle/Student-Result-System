import "./App.css";
// import { BrowserRouter as Routes, Route} from 'react-router-dom';
// import TeacherLogin from './TeacherLogin';
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AddStudent from "./components/AddStudent";
import StudentLogin from "./components/StudentLogin";
import Result from "./components/Result";
import AdminDashboard from "./components/AdminDashboard";
import EditStudent from "./components/EditStudent";
import Register from "./components/Register";
// import TeacherDashboard from './TeacherDashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<StudentLogin />} />
        <Route path="/login" element={<StudentLogin/>}/>
        <Route path="/result" element={<Result />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default App;
