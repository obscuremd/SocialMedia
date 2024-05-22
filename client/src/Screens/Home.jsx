import Friends from '../Components/Friends'
import Post from '../Components/Post'
import PropTypes from 'prop-types'
import { FriendsState } from '../state/atoms/FriendsState'
import { useRecoilValue } from 'recoil'
import FriendsMobile from '../Components/FriendsMobile'
import Feed from '../Components/HomeComponents/Feed'

const Home = ({isMobile}) => {

  const friendState = useRecoilValue(FriendsState)

  return (
    <div className={isMobile? 'ml-0':' mr-[4%] flex gap-10'}>
          <Feed/>

            {isMobile && friendState ?
              <FriendsMobile/>:
              <div className={isMobile && 'hidden'}>
                <Friends/>
              </div>
            }
    </div>
  )
}

Home.propTypes = {
    isMobile: PropTypes.bool
}

export default Home