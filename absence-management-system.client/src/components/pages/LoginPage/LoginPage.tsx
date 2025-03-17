import LoginForm from '../../compound/LoginForm/LoginForm';
import './LoginPage.scss';
import leylandTruckLogo from '../../../assets/images/Leyland_Trucks_logo.png';

function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="holiday-image">
                <img className="leyland-trucks-logo" alt='leyland-trucks-logo'  src={leylandTruckLogo}/>
            </div>
            <div className='login-box-area'>
                <LoginForm />
            </div>
        </div>
    );
}


export default LoginPage;