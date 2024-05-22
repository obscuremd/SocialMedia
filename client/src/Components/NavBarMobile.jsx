import { HomeSimple } from "iconoir-react"
import { Users } from "../assets/Data"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { CreatePostState } from "../state/atoms/CreatePostState"


const add = 'https://s3-alpha-sig.figma.com/img/c585/d523/8204ee863c8db241bbf753cf32eaf09d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipuQciyHyxdp7itLOP15f3YRG1HYxgsMgxS~5460fP-I5kkoI8NLxlKrzMPdoyeBOrNoY0aabreqV7KgHboVT5fcsNtKcWd87aRf8mJ-8lXyVmkJxD6aTntxEUT1W7g~i7XCFDD43IuFT7xAIIIJWoZmKv8VAPwqH~8Ic5SrcZjPw7bXSwWwJwrABALr8dZgdjmPjMIHURgnPGOBM9IEB0Bqb8dPuz-gStDjEU6PK~zJULN6QfVEfhYqkVAc-MH~-gABgCIbKJ4OQy8VJu9DcKmHCKopOAlbFhe7rd97ejwmNJxUOwsZ7sBA~JOBnBAQPsOs6qgyJhk2s~fQq-Gh8A__'

const NavBarMobile = () => {

  const [isCreatePostVisible, setCreatePostVisible] = useRecoilState(CreatePostState)

  return (
    <div className='sticky bg-[#191A23] bottom-0 w-full px-20 py-4 flex justify-center items-center'>
      <div className="inline-flex justify-center items-center bg-[#292B3B] px-6 py-2 gap-8 rounded-full   ">
        <Link to={'/'}>
          <HomeSimple className="text-base"/>
        </Link>
        <button onClick={()=>setCreatePostVisible(!isCreatePostVisible)}>

          <img src={add} className='w-6 rounded-full'/>
        </button>
        <Link to={'/profile'}>
          <img src={Users[0].profilePicture} className='w-6 h-6 rounded-full object-cover'/>
        </Link>
      </div>
    </div>
  )
}

export default NavBarMobile