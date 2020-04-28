import React, { useState } from 'react';
import axios from 'axios';

const LogIn = (props) => {
    const [ creds, setCreds ] = useState({username:'', password:''});
    const [ prompt, setPrompt ] = useState("");

    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]:e.target.value});
    };

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                setPrompt("You're loggin' in now....")
                setTimeout(() => {
                    props.history.push('/friends')
                }, 2000);
            })
            .catch(error => setPrompt("Wrong Log In Info...", error))
    }
      
    return (
    <div className="LogIn">
        <h1>Log In to See Your Friends</h1>
        {prompt ? <p>{prompt}</p>: null}
    <form onSubmit={submitForm}>
        <input type='text' 
            name='username' 
            placeholder='Enter your name...' 
            onChange={handleChange} 
            value={creds.username}/>
        <input type='text' 
            name='password' 
            placeholder='Select your password...' 
            onChange={handleChange} 
            value={creds.password}/>
        <input type="submit" />
    </form>
    </div>
);
}

export default LogIn;