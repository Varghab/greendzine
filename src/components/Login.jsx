import React, { useState } from 'react'
import Logo from '../assets/greendzine-logo.png'

const Login = ({setIsValidated}) => {
    const [formData, setFormData] = useState({email:"", password:""});
    const onLoginHandler = (e) => {
        e.preventDefault();
        const {email, password} = formData;
        const emailRegex = /\w+@\w+\.com/
        const passwordRegex = /^.{6,}$/
        if(!emailRegex.test(email)){
            alert("Please enter a valid email");
            return;
        }
        if(!passwordRegex.test(password)){
            alert("Password should be of atleast 6 characters!");
            return;
        }
        if(password==='123456'){
            setIsValidated(true);
        }else{
            alert('Wrong credentials! Password must be 123456')
            setIsValidated(false);
        }

    }
    return (
        <div className='login-container'>
            <section className='login-heading-container'>
                <img className="logo" alt="Greendzine Logo" src={Logo}></img>
                <p className='login-heading'>We are electric</p>
            </section>
            <form onSubmit={onLoginHandler} className='input-field-container'>
                <div className='input-fields'>
                    <input autoComplete='off' required name="email" onChange={(e)=> setFormData({...formData, [e.target.name]:e.target.value})} placeholder='Email' type="text" className='input-field'></input>
                    <input required name="password" onChange={(e)=> setFormData({...formData, [e.target.name]:e.target.value})} placeholder='Password' type='password' className='input-field'></input>
                </div>
                <div className='login-action-container'>
                    <button type='submit' className='login-button'>Login</button>
                    <button className='forget-password-button'>Forget Password?</button>
                </div>
            </form>
        </div>
    )
}

export default Login
