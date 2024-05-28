import './App.css'
import Header from './Components/Header';
import Auth from './Screens/Auth/Auth';
import Navigation from './Screens/Navigation';
import {BrowserRouter} from 'react-router-dom'
import { UserState } from './state/atoms/UserState';
import { useRecoilState} from 'recoil';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';

function App() {

  const status = window.localStorage.getItem('token');

  const [user, setUser]= useRecoilState(UserState)

  useEffect(()=>{
    status && setUser(jwtDecode(status).user)
  },[])

  console.log(user)

  return (
    <BrowserRouter>
      <div className='min-w-full bg-[#191A23] text-white md:px-0 px-[17px] '>
          <Header/>

          {status ?<Navigation/>  : <Auth/>}
          
      </div>
    </BrowserRouter>
  )
}

export default App
