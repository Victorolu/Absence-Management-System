import BaseCheckbox from '../../core/BaseCheckbox/BaseCheckbox';
import UserProfile from '../UserProfile/UserProfile';
import './ProfileSidePanel.scss';

function ProfileSidePanel() {
    return (<div className='profile-side-panel-container'>
        <UserProfile></UserProfile>
        <div className='manage-requests'>
            <p>View pending approval requests (10)</p>
            <p>View my requests (1)</p>
        </div>
        <div className='department-details'>
            <p className='department-name'>My Department</p>
            <div className='team-members'>
                <div className='team-member'>
                    <BaseCheckbox />
                    <span className='team-member-name'>Testing this</span>
                </div>
            </div>
        </div>
    </div>);
}

export default ProfileSidePanel;