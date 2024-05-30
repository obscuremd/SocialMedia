import { useState } from 'react'
import addImage from '../assets/Vector.svg'
import { Xmark } from 'iconoir-react';
import { Shared, ToasterStyle } from '../assets/Shared';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CreatePostState } from '../state/atoms/CreatePostState';
import {motion} from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { UserState } from '../state/atoms/UserState';
import { hourglass } from 'ldrs'


const CreatePost = () => {


hourglass.register()

  
  const [image, setImage]=useState(null)
  const [desc, setDesc] = useState(null)
  const [imageUrl, setImageUrl]=useState(null)
  const [imageUploading, setImageUploading] = useState(false)
  

  const storage = getStorage()

  const [isCreatePostVisible, setCreatePostVisible] = useRecoilState(CreatePostState)

  const user = useRecoilValue(UserState)

  const ImageChange=async(e)=>{
    setImage(e.target.files[0])
    const imageRef = ref(storage, `socialMedia/posts/${image.name}`)

    image == null && toast.error("Please provide a valid image")
    try {
      const upload = await uploadBytes(imageRef, image)
      const url = await getDownloadURL(upload.ref)
      console.log(imageUrl);
      setImageUrl(url)
    } catch (error) {
      toast.error('error')
      console.log(error);
    }
  }

  const createPost =async()=>{
    try {
      const req = await axios.post(`/api/posts/${user._id}`,{image:imageUrl, desc:desc})
      console.log(req)
    } catch (error) {
      toast.error('error')
    }
  }

  return (
    <motion.div
      initial={{scale:0}} animate={{scale:1}}
      className="fixed md:top-16 top-0 w-full h-screen bg-[#2020209d] backdrop-filter backdrop-blur-sm flex justify-center items-center pr-[5%] md:pr-0">
        <Toaster toastOptions={{style:ToasterStyle}}/>
      {/* inner blue container */}
      <motion.div className="bg-[#292B3B] rounded-3xl p-6 flex flex-col gap-3">
        <p style={{fontSize:Shared.Text.large, fontWeight:'700'}}>Create Post</p>
        {/* image */}
        {image === null 
        ?// empty image
          <div className="md:w-[637.473px] w-72 md:h-[209.55px] h-24 border-2 border-[#62668980] rounded-3xl flex justify-center items-center">
            <div className='flex bg-[#82828280] rounded-full md:p-4 p-2 gap-3 '>
              <label 
                htmlFor="fileInput" 
                style={{fontSize:Shared.Text.small, fontWeight:'700'}} className='flex gap-1 cursor-pointer items-center'>
                  <img style={{width:Shared.Text.large}} src={addImage} alt="" />Add A Picture ?
              </label>
              <input type="file" id='fileInput' accept='image' placeholder='Add A Picture ?' style={{display:'none'}} onChange={ImageChange}/>
            </div>
          </div>
          : // FILLED IMAGE
          <div className='md:w-[637.473px] w-72 h-[50vh] flex flex-col justify-center items-end'>
            <button onClick={()=>setImage(null)} className=''>
              <Xmark/>
            </button>
            <div className='md:w-[637.473px] w-72 h-[50vh] relative'>
              {imageUploading &&
                <div className="absolute md:w-[637.473px] w-72 h-[50vh] rounded-3xl bg-[#afafaf46] backdrop-blur-md flex justify-center items-center">
                <l-hourglass  size="40" bg-opacity="0.1" speed="1.75" color="#292B3B"/>
              </div>}
              <img src={imageUrl} className="w-full h-full border-2 border-[#62668980] rounded-3xl flex justify-center items-center object-contain"/>
            </div>
          </div>
        }
        
        {/* input */}
        <input type='text' onChange={(e)=>setDesc(e.target.value)} placeholder='Got any juicy gossip to spill' style={{fontSize:Shared.Text.small}} className="p-3 w-full rounded-full bg-[#292B3B] border-[1px] border-[#62668980] outline-none focus:border-[#797da9]" />

        {/* buttons */}
        <div className='flex gap-6'>
          <button
            onClick={createPost}
            style={{background:'linear-gradient(129deg, #D64975 -54.57%, #152046 94.11%)',fontSize: Shared.Text.large,}} 
            className="md:px-12 md:py-2 px-2 py-1 border-[#62668980] border-[1px] rounded-full w-full font-bold">
              Create Post
          </button>
          <button
            onClick={()=>setCreatePostVisible(!isCreatePostVisible)}
            style={{background:'#82828280',fontSize: Shared.Text.large,}} 
            className="md:px-12 md:py-2 px-2 py-1 border-[#62668980] border-[1px] rounded-full w-full font-bold">
              Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CreatePost