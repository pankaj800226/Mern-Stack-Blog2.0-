import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import AddBlog from "./pages/AddBlog";
import AllUsersBlog from "./pages/AllUsersBlog";
import Profile from "./pages/Profile";
import { ProtectRoute } from "./protectedRoute/ProtectRoute";
import EditBlog from "./pages/EditBlog";

//style components 
import './styles/home.scss'
import './styles/header.scss'
import './styles/addblog.scss'
import './styles/allUserBlog.scss'
import './styles/signUp.scss'
import './styles/profile.scss'




const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addblog" element={
            <ProtectRoute>
              <AddBlog />
            </ProtectRoute>
          } />
          <Route path="/profile" element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          } />
          <Route path="/alluserblog/:id" element={
            <ProtectRoute>
              <AllUsersBlog />
            </ProtectRoute>
          } />
          <Route path="/editBlog/:id" element={
            <ProtectRoute>
              <EditBlog />
            </ProtectRoute>
          } />


        </Routes>
      </Router>
    </div>
  )
}

export default App