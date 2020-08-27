import React, { useState } from 'react';
import { FormInput } from '../../component/';
import { Form, Button, Alert } from 'reactstrap';
import { userLogin } from '../../redux/reducers/auth/auth.thunk';
import { connect , useSelector } from 'react-redux';

function AddContact() {
    const [contact, setContact] = useState({})
    const handleChange = (e)=>{
        const {name , value} = e.target;
        setContact({...setContact , [name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h1 className={'my-4'}>Register</h1>
            <FormInput id='username' value={contact.username} onChange={handleChange}/>
            <FormInput id='email' value={contact.email} onChange={handleChange}/>
            <FormInput type={'password'} id='password' value={contact.password} onChange={handleChange}/>
            <FormInput type={'password'} id='password2' value={contact.password2} onChange={handleChange}/>
            <Button type='submit'>create new contact</Button>{' '}
            <Button type='reset'>Clear</Button> {' '}
        </Form>
    )
}

export default AddContact
