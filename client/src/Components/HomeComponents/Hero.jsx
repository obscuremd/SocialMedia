import{ useEffect, useState } from 'react'
import { Shared } from '../../assets/Shared'
import { Users } from '../../assets/Data'
import { useRecoilValue } from 'recoil'
import { UserState } from '../../state/atoms/UserState'
import axios from 'axios'

const Hero = ({userPosts, setUserPosts, setFetchPosts, setLoading}) => {

    const user = useRecoilValue(UserState)

    const trending = async() =>{
        setFeed(0)
        const res = await axios.get('/api/posts/');
        setUserPosts(res.data.sort((p1,p2)=>{
            return new Date(p2.likes.length) - new Date(p1.likes.length)
        })); // Update state with fetched posts
        setFetchPosts(()=>trending)
        setLoading(false)
    }
    
    const following = async() =>{
        setFeed(1)
        const res = await axios.get(`/api/timeline/${user._id}`);
        setUserPosts(res.data.sort((p1,p2)=>{
            return new Date(p2.createdAt) - new Date(p1.createdAt)
        })); // Update state with fetched posts
        setFetchPosts(()=>following)
        setLoading(false)

    }
    const nearby = async() =>{
        setFeed(2)
        const res = await axios.get('/api/posts/');
        setUserPosts(res.data.sort((p1,p2)=>{
            return new Date(p1.createdAt) - new Date(p2.createdAt)
        })); // Update state with fetched posts
        setFetchPosts(()=>nearby)
        setLoading(false)
    }

    useEffect(()=>{
        setFetchPosts(()=>trending)
        trending()
    },[])


    

    const [feed, setFeed] = useState(0)

    

    const feedTypes = [
        { id: 0, label: "Trending" , func:trending },
        { id: 1, label: "Following" , func:following },
        { id: 2, label: "Nearby" , func:nearby}
    ];
    return(
        <div className="flex flex-col md:gap-12 gap-6">
            {/* text */}
            <div>
                <p style={{fontSize:Shared.Text.xl, fontWeight:'bold', textTransform:'capitalize'}}>Hello {user.username} 😃</p>
                <p style={{fontSize:Shared.Text.large, fontWeight:'400'}}>what’s the tea ?</p>
            </div>

            {/* search */}
            <div className="flex items-center gap-2 md:gap-4">
                <img src={Users[0].profilePicture} alt="" className="md:w-12 w-7 md:h-12 h-7 rounded-full object-cover"/>
                <input type="text" placeholder="Find The Tea" style={{fontSize:Shared.Text.small}} className="p-3 w-full rounded-full bg-[#292B3B] border-[1px] border-[#62668980] outline-none focus:border-[#797da9]" />
            </div>

            {/* options */}
            <div className="inline-flex md:p-2 p-1 bg-[#292B3B] border-[1px] gap-4 border-[#62668980] rounded-2xl">
            {feedTypes.map(({ id, label,func }) => (
                <button
                    key={id}
                    onClick={func}
                    style={{
                            background: feed === id && 'linear-gradient(129deg, #D64975 -54.57%, #152046 94.11%)',
                            fontSize: Shared.Text.large,
                            borderWidth: feed === id ? 1 : 0
                        }}
                        className="md:px-12 md:py-2 px-2 py-1 border-[#626689] rounded-xl font-bold"
                    >
                        {label}
                </button>
            ))}
            </div>
        </div>
    )
}

export default Hero