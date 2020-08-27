import React, { useState } from 'react';
import { Form, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import FormInput from '../FormInput/FormInput';
import axios from 'axios';
import { createContact } from '../../redux/reducers/contact/contact.thunk';
import { connect , useSelector } from 'react-redux'
function CreateForm({ isOpen, toggle, createContact }) {
    const token = useSelector(state => state.auth.token)
    const error = useSelector(state=> state.contacts.error)
    const config = {
        headers: { 'Authorization': `Token ${token}` },
    };
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        country: '',
        city: '',
        street: "",
        birthday: '',
        is_favorite: false,
        error: null
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        if (e.target.type == 'checkbox') {
            setState({ ...state, [name]: e.target.checked })
        }
        else {
            setState({ ...state, [name]: value })
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, mobile, birthday, is_favorite, country, city, street } = state;
        const data = { first_name, last_name, email, mobile, birthday, is_favorite, address: { country, city, street } }
        createContact(data).then(() => toggle())
    }
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader toggle={toggle}>create new contact</ModalHeader>
                <ModalBody>
                    <FormInput id='first_name' invalid={error && error.first_name} onChange={handleChange} value={state.first_name} />
                    <FormInput id='last_name' invalid={state.error && error.last_name} onChange={handleChange} value={state.last_name} />
                    <FormInput id='mobile' invalid={state.error && error.mobile} onChange={handleChange} value={state.mobile} />
                    <FormInput id='email' invalid={state.error && error.email} onChange={handleChange} value={state.email} />
                    <FormInput id='is_favorite' checked={state.is_favorite} type={'checkbox'} invalid={error && error.is_favorite} onChange={handleChange} />
                    <FormInput id='birthday' type={'datetime-local'} invalid={error && error.birthday} onChange={handleChange} value={state.birthday} />
                    <FormInput id='country' invalid={error && error.address && error.address.country} onChange={handleChange} value={state.country} />
                    <FormInput id='city' invalid={error && error.address && error.address.city} onChange={handleChange} value={state.city} />
                    <FormInput id='street' invalid={error && error.address && error.address.street} onChange={handleChange} value={state.street} />
                </ModalBody>
                <ModalFooter>
                    <Button type='submit'>save</Button>
                </ModalFooter>
            </Form>
        </Modal>




    )
}

export default connect(null, { createContact })(CreateForm)
