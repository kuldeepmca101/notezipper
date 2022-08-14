import React, { useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage';
import LoginScreen from './LoginScreen/LoginScreen';
import MyNotes from './MyNotes/MyNotes';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = () => {

    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else if (userInfo) {
            navigate('/mynotes');
        }
    }, [navigate, userInfo]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/mynotes" element={<MyNotes />} />
            </Routes>
        </div>
    )
}

export default MainPage
