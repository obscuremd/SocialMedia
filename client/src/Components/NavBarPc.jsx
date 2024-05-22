import { ChatLines, ForwardMessage, HelpCircle, HomeSimple} from 'iconoir-react'
import { useState } from 'react'
import { Shared } from '../assets/Shared'
import { Users } from '../assets/Data'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil'
import { CreatePostState } from '../state/atoms/CreatePostState'


const add = 'https://s3-alpha-sig.figma.com/img/c585/d523/8204ee863c8db241bbf753cf32eaf09d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipuQciyHyxdp7itLOP15f3YRG1HYxgsMgxS~5460fP-I5kkoI8NLxlKrzMPdoyeBOrNoY0aabreqV7KgHboVT5fcsNtKcWd87aRf8mJ-8lXyVmkJxD6aTntxEUT1W7g~i7XCFDD43IuFT7xAIIIJWoZmKv8VAPwqH~8Ic5SrcZjPw7bXSwWwJwrABALr8dZgdjmPjMIHURgnPGOBM9IEB0Bqb8dPuz-gStDjEU6PK~zJULN6QfVEfhYqkVAc-MH~-gABgCIbKJ4OQy8VJu9DcKmHCKopOAlbFhe7rd97ejwmNJxUOwsZ7sBA~JOBnBAQPsOs6qgyJhk2s~fQq-Gh8A__'


const NavBarPc = () => {
    const [active, setActive] = useState(0)

    const Button = ({icon, state, name, link}) =>{
        return(
            <Link to={link}>
                <button 
                    onClick={()=>setActive(state)}
                    style={{fontSize:Shared.Text.large, 
                            background:active === state ? '#62668980' : 'transparent',
                            borderColor:'#626689',
                            borderWidth:active === state ? 1 : 0}} 
                    className='flex gap-8 p-4 w-[270px] rounded-2xl capitalize'>
                        {icon}{name}
                </button>
            </Link>
        )
    }

    Button.propTypes = {
        icon: PropTypes.node.isRequired, // Assumes icon is a React element
        state: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string // Add more specific validation if necessary
    };

    const [isCreatePostVisible, setCreatePostVisible] = useRecoilState(CreatePostState)

  return (
    <div className='h-screen sticky top-[10%] flex flex-col gap-7 ml-[2%]'>
        {/* Home and Message */}
        <div className='p-5 flex flex-col gap-8 bg-[#292B3B] rounded-3xl'>
            <Button icon={<HomeSimple/>} state={0} name={'Home'} link={'/'}/>
            <Button icon={<ChatLines/>} state={1} name={'Messages'}/>
        </div>
        {/*create post */}
        <button 
            onClick={()=>setCreatePostVisible(!isCreatePostVisible)}
            style={{fontSize:Shared.Text.large, 
                    background: '#292B3B',
                    borderColor:'#626689',
                    borderWidth: 1}} 
            className='flex gap-8 p-4 w-full rounded-2xl capitalize items-center'>
                    <img src={add} className='w-9'/>Create Post
            </button>
        {/*others */}
        <div className='p-5 flex flex-col gap-8 bg-[#292B3B] rounded-3xl'>
            <Button icon={<ForwardMessage/>} state={2} name={'Feedback'}/>
            <Button icon={<HelpCircle/>} state={3} name={'help & support'}/>
            <Button icon={<img src={Users[0].profilePicture} className='w-9 h-9 rounded-full object-cover'/>} state={5} name={'profile'} link={'/profile'}/>
        </div>
    </div>
  )
}

export default NavBarPc