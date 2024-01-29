import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './components/Header';
import Smoking from './Pages/Smoking';
import Excercise from './Pages/Excercise';
import Dress from './Pages/Dress';
import Studies from './Pages/Studies';

export default function App() {
  return <BrowserRouter>
  <Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/smoking' element={<Smoking />} />
      <Route path='/excercise' element={<Excercise />} />
      <Route path='/dress' element={<Dress />} />
      <Route path='/studies' element={<Studies />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </Header>
  </BrowserRouter>
}
