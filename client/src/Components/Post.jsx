import { Clock, Heart, HeartSolid, MapPin, MessageText, MoreHoriz } from "iconoir-react"
import { Posts, Users } from "../assets/Data"
import { Shared } from "../assets/Shared"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { CommentState } from "../state/atoms/CommentState"
import axios from "axios"
import { Link } from "react-router-dom"
import empty from '../assets/empty profile.svg'
import { UserState } from "../state/atoms/UserState"


const Post = ({profilePicture, username, like, photo, desc, comment, date, postsDetails, fetchPosts}) => {

    const user = useRecoilValue(UserState)
    const [isCommentVisible, setCommentVisible] =useRecoilState(CommentState)
    const photos = photo
    const isMobile = window.innerWidth < 768
    const windows = window.innerHeight - ( isMobile ?500:200)
    const [isLiked, setIsLiked] =useState(false)
    // const [likes, setLikes] =useState(like)

    const posts = postsDetails
    const [users, setUsers] = useState()

    // console.log(user._id);

    useEffect(()=>{
        const fetchUsers =async()=>{
            const res =  await axios.get(`/api/users?userId=${posts.userId}`)
            setUsers(res.data)
        }

        setIsLiked(posts && posts.likes && posts.likes.includes(user._id))
        fetchUsers()
    },[])

    const handleLike = async () => {
        try {
            await axios.put(`/api/posts/${posts._id}/likes`, { userId: user._id });
            fetchPosts();
            setIsLiked(prevIsLiked => !prevIsLiked);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="w-full border-[1px] border-[#62668980] rounded-[13px] px-5 py-3" style={{background:'#292B3B'}}>
        
        {/* Profile and likes */}
        <div className="flex justify-between">
            {/* profile */}
            <Link to={`/Userprofile/${users?.username}`}>
                <div className="flex items-center gap-3">
                    <img src={users?.profilePicture || empty} alt="" className="w-9 h-9 object-cover rounded-full bg-[#ffffff25]" />
                    <div className="">
                        <p style={{fontSize:Shared.Text.large}} className="font-bold capitalize">{users?.username}</p>
                        <p className="text-[#FFFFFF80] flex items-center font-medium" style={{fontSize:Shared.Text.small}}><Clock height={Shared.Text.small} color="FFFFFF80"/>{date}</p>
                    </div>
                </div>
            </Link>
            
            {/* likes and more */}
            <div className="flex flex-col items-end">
                <MoreHoriz/>
                <button onClick={handleLike} className="flex items-center py-1 px-2 rounded-2xl bg-[#FFFFFF1A] gap-1" style={{fontSize:Shared.Text.small}}>
                    {isLiked ? <HeartSolid color="#D64975"/> : <Heart/>}
                    <p>{like}</p>
                </button>
            </div>
        </div>


        {/* image Post */}
        {
            photos &&
                <img src={photo} alt="" className="w-full object-cover md:mt-12 mt-2 rounded-xl" style={{height:windows}} />
        }
            
        
        {/* desc */}
        <div  
            style={{background: 'linear-gradient(129deg, #D64975 -54.57%, #152046 94.11%)', fontSize:Shared.Text.small}} 
            className="md:p-5 p-2 md:mt-12 mt-2 border-[1px] border-[#626689] rounded-xl font-bold">
                <p>{desc}</p>
                <button onClick={()=>setCommentVisible(!isCommentVisible)} className="md:p-2 p-1 bg-[#82828280] inline-flex gap-1 rounded-3xl md:mt-6 mt-3">
                    <MessageText />
                    <p>{comment} Comments</p>
                </button>
        </div>
    </div>
)
}

export default Post