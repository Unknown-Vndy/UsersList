import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateAccountForm from './components/CreateAccountForm';
import SignUpForm from './components/SignUpForm';
import Slider from './components/Slider';
import NotFound from './pages/NotFound';
import UsersList from './components/UsersList';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='SignUpForm' element={<SignUpForm />} />
          <Route path='CreateAccountForm' element={<CreateAccountForm />} />
          <Route path='Slider' element={<Slider />} />
          <Route path='UsersList' element={<UsersList />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
