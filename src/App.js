
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AssignRole from './Components/Dashboard/AssignRole/AssignRole';
import CreateStaff from './Components/Dashboard/CreateStaff/CreateStaff';
import Dashboard from './Components/Dashboard/Home/Dashboard';
import PendingPosts from './Components/Dashboard/PendingPosts/PendingPosts';
import Posts from './Components/Dashboard/Posts/Posts';
import Staffs from './Components/Dashboard/Staffs/Staffs';
import Users from './Components/Dashboard/Users/Users';
import Login from './Components/User/Login/Login';
import SingleBlog from './Pages/User/Blog/SingleBlog';
import Home from './Pages/User/Home/Home';
import UserLogin from './Pages/User/Login/UserLogin';
import UserPost from './Pages/User/Post/UserPost';
import UserSignup from './Pages/User/Signup/UserSignup';
import DashboardHome from './Components/Dashboard/Home/DahboardHome';
import ViewPost from './Components/Dashboard/ViewPost/ViewPost';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import StaffBoard from './Components/Staff/Home/StaffBoard';
import StaffHome from './Components/Staff/Home/StaffHome';
import NotFound from './Components/Shared/NotFound';
import StaffRoute from './Routes/StaffRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts/:id" element={<PrivateRoute><SingleBlog /></PrivateRoute>} />
                        <Route path="/createpost" element={<UserPost />} />
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/signup" element={<UserSignup />} />
                        <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>
                            <Route path="/dashboard" element={<DashboardHome />} />
                            <Route path="posts/:id" element={<ViewPost />} />
                            <Route path="users" element={<Users />} />
                            <Route path="staffs" element={<Staffs />} />
                            <Route path="posts" element={<Posts />} />
                            <Route path="pendingposts" element={<PendingPosts />} />
                            <Route path="assignrole" element={<AssignRole />} />
                            <Route path="createstaff" element={<CreateStaff />} />
                        </Route>
                        {/* Staff Routes */}
                        <Route path="/staffboard" element={<StaffRoute><StaffBoard /></StaffRoute>}>
                            <Route path="/staffboard" element={<StaffHome />} />
                            <Route path="posts/:id" element={<ViewPost />} />
                            <Route path="users" element={<Users />} />
                            <Route path="posts" element={<Posts />} />
                            <Route path="pendingposts" element={<PendingPosts />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default App;
