// src/App.js

import React from 'react';
import './App.css';
import Login from './component/Login';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MyInfo from './component/MyInfo';
import SignUp from './component/SignUp';
import PrivateRoute from './component/PrivateRoute';
import Example from './component/Example';
import SendMailExample from './component/SendMailExample';
import VerifyExample from './component/VerifyExample';
import DeleteStudentsExample from './component/DeleteStudentsExample';
import GetAllSupportedUnivExample from './component/GetAllSupportedUnivExample';
import CheckSupportedUnivExample from './component/CheckSupportedUnivExample';
import GetVerifiedStudentsExample from './component/GetVerifiedStudentsExample';
import ErrorExample from './component/ErrorExample';
import Contact from './component/Contact';
import ApiKeyManager from './component/ApiKeyManager';
import ApiKeyManagerStudentRegistry from './component/ApiKeyStrudnetRegistry';
import DeleteStudentExample from './component/DeleteStudentExample';



const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<Login />} />
        {/* <SignIn /> */}
        <Route path="/myInfo" element={<MyInfo/>}></Route>
        {/* <Route path="/myInfo" element={<MyInfo />} /> */}
        {/* <LogIn /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/example" element={<Example />} />
        <Route path='/example/sendMail' element={<SendMailExample />} />
        <Route path='/example/verify' element={<VerifyExample />} />
        <Route path='/example/student/delete' element={<DeleteStudentsExample />} />
        <Route path='/example/student/delete/email' element={<DeleteStudentExample />} />
        <Route path='/example/getAllSupportedUniv' element={<GetAllSupportedUnivExample />} />
        <Route path='/example/checkSupportedUniv' element={<CheckSupportedUnivExample />}/>
        <Route path='/example/getVerifiedStudents' element={<GetVerifiedStudentsExample />} />
        <Route path='/example/error' element={<ErrorExample />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/manager' element={<ApiKeyManager />} />
        <Route path='/registry' element={<ApiKeyManagerStudentRegistry />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;