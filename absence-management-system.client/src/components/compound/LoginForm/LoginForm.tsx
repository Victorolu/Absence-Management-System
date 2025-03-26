import { useState } from 'react';
import './LoginForm.scss';
import { BaseButton, ButtonTheme } from '../../core/BaseButton/BaseButton';
import { BaseTextBox, InputType } from '../../core/BaseTextBox/BaseTextBox';
import { getAutheticationToken } from '../../../modules/services/authService';


function LoginForm() {
    const [showForm, setShowForm] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const getuserNameAndPasswordForm = (element : HTMLElement) : void => {
        setShowForm(true);
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }

    const submitForm = async () => {
        
        if(await getAutheticationToken(userName, password)){
            console.log("Wow");
        }
        else{
            console.log("hehe");
        }

        console.log("jojo");
    }

    return (
        <div className="login-box-container">
            <h1 className='title'>ABSENCE MANAGEMENT SYSTEM</h1>
            <div className='login-options'>
                <p className={`login-text ${showForm ? 'hide': 'show'}`} onClick={event=> getuserNameAndPasswordForm(event.currentTarget)}>Log in using company userName/password</p>
                <form className={`login-form ${showForm ? 'show' : 'hide'}`}>
                    <p>Log In To Your Account</p>
                    <label htmlFor="userName">userName</label>
                    <BaseTextBox id="userName" inputType={InputType.Text} value={userName} valueSetter={(newValue) => setUserName(newValue)} placeholder='user' required={true}/>
                    <label htmlFor="userPassword">Password</label>
                    <BaseTextBox id="userPassword" inputType={InputType.Password} value={password} valueSetter={(newValue) => setPassword(newValue)} placeholder='**********' pattern={'[\\S\\s]*'} required={true}/>
                    <BaseButton buttonTheme={ButtonTheme.DefaultOutline} onClick={() => submitForm()} isSubmit={true}>Log In</BaseButton>
                </form>
                <p><a href='#'>Log in through SAML Authentication</a></p>
            </div>
        </div>
    );
}

export default LoginForm;