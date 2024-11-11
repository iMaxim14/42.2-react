import { profileData } from "./data";
import georgBrown from './georg_brown.jpg';
import './styles.css'

function ProfileCard(){

    return (
        <div className="profile-card">
            <img src={georgBrown} alt="Georg_Brown" className="georg_brown_img"/>
            <h3 className="user-name-profile-card">{profileData.user_name}</h3>
            <p className="job-info">{profileData.job}</p>
            <p className="hobby-info">Hobby: {profileData.hobby}</p>
        </div>
    )
};

export default ProfileCard;