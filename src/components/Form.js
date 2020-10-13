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
    font-size: 1rem;
`

const StyledSelect = styled.select`
    width: 100%;
    height: 5vh;
    border-radius: 5px;
    border: none;
    margin: 5% 0;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
    }
`

const StyledButton = styled.button`
    margin-top: 5%;
    background-color: #62DAFB;
    border-radius: 5px;
    border: none;
    width: 35%;
    height: 5vh;
    font-size: 1.5rem;
    &:hover{
        background-color: #fb8362;
        color: white;
        cursor: pointer;
    }
`

const Form = props => {
    const [newTeamMember, setNewTeamMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: '',
    })

    const changeHandler = (event) => {
        setNewTeamMember({
            ...newTeamMember,
            [event.target.name]: event.target.value
        })
    }

    return (
        <StyledForm
            onSubmit={event => {
                event.preventDefault();
                alert(`${newTeamMember.name}... ${newTeamMember.email}... ${newTeamMember.role}`)
                props.addTeamMember(newTeamMember)
                setNewTeamMember({
                    id: Date.now(),
                    name: '',
                    email: '',
                    role: ''
                })
            }}
        >
            <StyledLabel htmlFor='name'>Name: </StyledLabel>
            <StyledInput 
                id='name' 
                type='text' 
                name='name' 
                placeholder='Please Enter Your Full Name' 
                value={newTeamMember.name}
                onChange={changeHandler}
            />

            <StyledLabel htmlFor='email'>Email: </StyledLabel>
            <StyledInput 
                id='email' 
                type='email' 
                name='email' 
                placeholder='Please Enter Your Email' 
                value={newTeamMember.email}
                onChange={changeHandler}
            />

            <StyledLabel htmlFor='role'>Select Your Role: </StyledLabel>
            <StyledSelect id='role' name='role' value={newTeamMember.role} onChange={changeHandler}>
                <option value=''>--Please Choose An Option--</option>
                <option value='Frontend Developer'>Frontend Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
                <option value='CSS Specialist'>CSS Specialist</option>
                <option value='React Specialist'>React Specialist</option>
                <option value='Project Lead'>Project Lead</option>
            </StyledSelect>

            <StyledButton type='submit'>Submit</StyledButton>
        </StyledForm>
    )
}

export default Form;