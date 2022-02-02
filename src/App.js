
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Home/Dashboard';
import Login from './Components/User/Login/Login';
import SingleBlog from './Pages/User/Blog/SingleBlog';
import Home from './Pages/User/Home/Home';
import UserLogin from './Pages/User/Login/UserLogin';
import UserPost from './Pages/User/Post/UserPost';
import UserSignup from './Pages/User/Signup/UserSignup';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<SingleBlog />} />
                    <Route path="/createpost" element={<UserPost />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/signup" element={<UserSignup />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
