import './UserProfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function UserProfile() {
    return (<div className='user-profile-container'>
        <div className='user-initials'>
            TB
            <FontAwesomeIcon icon={faBell} />
            <span className='notification-alert'></span>
        </div>
        <p className='user-name'>Tampa bay</p>
        <p className='job-title'>Software Developer</p>
    </div>);
}

export default UserProfile;