import './App.css'
import Header from './Components/Header';
import Auth from './Screens/Auth/Auth';
import Navigation from './Screens/Navigation';
import {BrowserRouter} from 'react-router-dom'
import { ActiveUserState, UserState } from './state/atoms/UserState';
import { useRecoilValue } from 'recoil';

function App() {

  const user = useRecoilValue(ActiveUserState)
  

  return (
    <BrowserRouter>
      <div className='min-w-full bg-[#191A23] text-white md:px-0 px-[17px] '>
          <Header/>

          {user ?<Navigation/>  : <Auth/>}
          {/* <Navigation/> */}
          {/* <Auth/> */}
      </div>
    </BrowserRouter>
  )
}

export default App
