import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
`

const StyledLabel = styled.label`
    color: #62DAFB;
`

const StyledInput = styled.input`
    width: 100%;
    height: 5vh;
    border-radius: 5px;
    border: none;
    margin: 5% 0;
`

const StyledSelect = styled.select`
    width: 100%;
    height: 5vh;
    border-radius: 5px;
    border: none;
    margin: 5% 0;
`

const StyledButton = styled.button`
    margin-top: 10%;
    background-color: #62DAFB;
    border-radius: 5px;
    border: none;
    width: 35%;
    height: 5vh;
    font-size: 1.5rem;
`

const Form = props => {
    const [teamMember, setTeamMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: '',
    })

    const changeHandler = (event) => {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        })
    }

    return (
        <StyledForm
            onSubmit={event => {
                event.preventDefault();
                props.addTeamMember(teamMember)
                setTeamMember({
                    id: Date.now(),
                    name: '',
                    email: '',
                    role: '',
                })
            }}
        >
            <StyledLabel htmlFor='name'>Name: </StyledLabel>
            <StyledInput 
                id='name' 
                type='text' 
                name='name' 
                placeholder='Please Enter Your Full Name' 
                value={teamMember.name}
                onChange={changeHandler}
            />

            <StyledLabel htmlFor='email'>Email: </StyledLabel>
            <StyledInput 
                id='email' 
                type='email' 
                name='email' 
                placeholder='Please Enter Your Email' 
                value={teamMember.email}
                onChange={changeHandler}
            />

            <StyledLabel htmlFor='role'>Select Your Role: </StyledLabel>
            <StyledSelect id='role' name='role'>
                <option value=''>--Please Choose An Option--</option>
                <option value='frontend'>Frontend Developer</option>
                <option value='backend'>Backend Developer</option>
                <option value='css'>CSS Specialist</option>
                <option value='react'>React Specialist</option>
                <option value='lead'>Project Lead</option>
            </StyledSelect>

            <StyledButton type='submit'>Submit</StyledButton>
        </StyledForm>
    )
}

export default Form;