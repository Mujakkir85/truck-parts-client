
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorders from './Pages/Dashboard/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import AddReview from './Pages/Dashboard/AddReview'
import Home from './Pages/Home/Home';
import PurchasePart from './Pages/Home/Parts/PurchasePart';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin'
import SignUp from './Pages/Login/SignUp';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import Blog from './Pages/Blog/Blog';
import Alluser from './Pages/Dashboard/Alluser';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Myportfolio from './Pages/Home/Myportfolio/Myportfolio';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-6'>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id'
          element={<RequireAuth>
            <PurchasePart></PurchasePart>
          </RequireAuth>}>
        </Route>
        <Route path='dashboard' element={
          <RequireAuth> <Dashboard /></RequireAuth>}>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<Myprofile></Myprofile>}></Route>
          <Route path='alluser' element={<RequireAdmin><Alluser></Alluser></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
        <Route path='portfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
