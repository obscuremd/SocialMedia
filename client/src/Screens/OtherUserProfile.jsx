import Hero from '../Components/OtherUserComponents/Hero';
import ProfileFeed from '../Components/OtherUserComponents/ProfileFeed';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { isMobile } from '../assets/Shared';


const OtherUserProfile = () => {
  
    const username = useParams()
    const [user, setUser]= useState()
    const [posts, setPosts]= useState()

    console.log(username);
    
    useEffect(()=>{
        const fetchUsers =async()=>{
            const res =  await axios.get(`/api/users?username=${username.username}`)
            setUser(res.data)
            console.log(user);
        }

        const fetchPosts =async()=>{
            const res =  await axios.get(`/api/users?username=${username.username}`)
            setPosts(res.data)
            console.log(posts);
        }

        fetchUsers(), fetchPosts()
    },[])
    
  return (
    <div className={isMobile? 'ml-0':'mr-[4%] flex flex-col'}>
      <Hero data={user}/>
      <ProfileFeed isMobile={isMobile}/>
    </div>
  )
}


export default OtherUserProfile