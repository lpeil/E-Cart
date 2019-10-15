import React, { useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config';
import userIcon from './assets/user-icon.svg';
import emailIcon from './assets/email-icon.svg';
import keyIcon from './assets/key-icon.svg';

const SignupWrapper = styled.div`
    width: 100%;
    display: var(--flex);
    justify-content: var(--center);
`;

const SignUpForm = styled.form`
    width: 50%;
    min-width: 300px; 
    max-width: 100%;
    display: var(--flex);
    flex-direction: var(--column);
    align-items: var(--center);
    margin: 20px 0;
    padding-bottom: 20px;
    background-color: var(--color-nav);
    border-radius: 10px;
    box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.5);
`

const SignUpFormHeader = styled.div`
    width: 100%;
    background-color: var(--color-font2);
    display: var(--flex);
    flex-direction: var(--column);
    justify-content: var(--center);
    align-items: var(--center);
    padding: 10px 0;
    border-radius: 7px 7px 0 0;
`

const HeaderText = styled.span`
    font-size: ${props => props.fontsize};
    color: var(--color-nav);
    text-align: var(--center);
`

const SignUpInput = styled.input`
    width: 80%;
    height: 30px;
    margin: 10px 0;
    padding-left: 30px;
    border: none;
    background-color: var(--color-bg);
    background-image: url(${props => props.image});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 1%;
    color: var(--color-nav);
    border-radius: 5px;
    outline: none;

    &::placeholder {
        color: var(--color-nav);
    }
`

const SignUpButton = styled.button`
    width: 150px;
    max-width: 80%;
    height: 50px;
    font-size: 20px;
    border: none;
    border-radius:5px;
    background-color: var(--color-bg);
    color: var(--color-nav);
    outline: none;
`

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password } = values;

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
       <SignUpForm>
            <SignUpFormHeader>
                <HeaderText fontsize="32px">Create Your User Account</HeaderText>
                <HeaderText fontsize="24px">It's easy and fast</HeaderText>
            </SignUpFormHeader>
            <SignUpInput 
                onChange={handleChange('name')} 
                type="text" image={userIcon} 
                placeholder="Name"
            />
            <SignUpInput 
                onChange={handleChange('email')} 
                type="email" image={emailIcon} 
                placeholder="Email"
            />
            <SignUpInput 
                onChange={handleChange('password')} 
                type="password" image={keyIcon} 
                placeholder="Password"
            />
            <SignUpButton onClick={clickSubmit}>Submit</SignUpButton>
        </SignUpForm>
    </SignupWrapper>
)}

export default SignUp;