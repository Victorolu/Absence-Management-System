import { useState } from 'react';
import './LoginForm.scss';
import { BaseButton, ButtonTheme } from '../../core/BaseButton/BaseButton';
import { BaseTextBox, InputType } from '../../core/BaseTextBox/BaseTextBox';


function LoginForm() {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmailAndPasswordForm = (element : HTMLElement) : void => {
        setShowForm(true);
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }

    const submitForm = async () => {

        let response = await fetch("https://localhost:7053/", {
            headers: {
                "Authorization": `Basic ${email}:${password}`
            }
        });

        if(!response.ok){
            console.log("Did not work");
        }
        else {
            console.log("It worked");
        }
    }

    return (
        <div className="login-box-container">
            <h1 className='title'>ABSENCE MANAGEMENT SYSTEM</h1>
            <div className='login-options'>
                <p className={`login-text ${showForm ? 'hide': 'show'}`} onClick={event=> getEmailAndPasswordForm(event.currentTarget)}>Log in using company email/password</p>
                <form className={`login-form ${showForm ? 'show' : 'hide'}`}>
                    <p>Log In To Your Account</p>
                    <label htmlFor="userEmail">Email</label>
                    <BaseTextBox id="userEmail" inputType={InputType.Email} value={email} valueSetter={(newValue) => setEmail(newValue)} placeholder='user@eu.paccar.com' pattern={`[\\S\\s]*@paccar.com`} required={true}/>
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