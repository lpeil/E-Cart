import React, { useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config';

const SignupWrapper = styled.div`
    width: 100%;
`;

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const signup = (user) => {
        fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        signup({ name, email, password });
    }

    return (
    <SignupWrapper>
       <form>
            <input onChange={handleChange('name')} type="text" placeholder="Name"/>
            <input onChange={handleChange('email')} type="email"  placeholder="Email"/>
            <input onChange={handleChange('password')} type="password"  placeholder="Password"/>
            <button onClick={clickSubmit}>Submit</button>
        </form>
    </SignupWrapper>
)}

export default SignUp;