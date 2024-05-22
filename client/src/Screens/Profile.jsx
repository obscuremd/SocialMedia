import PropTypes from 'prop-types';
import Hero from '../Components/ProfleComponents/Hero';
import ProfileFeed from '../Components/ProfleComponents/ProfileFeed';


const Profile = ({isMobile}) => {
  
    
  return (
    <div className={isMobile? 'ml-0':'mr-[4%] flex flex-col'}>
      <Hero/>
      <ProfileFeed isMobile={isMobile}/>
    </div>
  )
}

Profile.propTypes = {
    isMobile: PropTypes.string
}
export default Profile