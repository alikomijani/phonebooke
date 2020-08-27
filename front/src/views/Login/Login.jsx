import React, { useState } from 'react';
import { FormInput } from '../../component/';
import { Form, Button, Alert } from 'reactstrap';
import { userLogin } from '../../redux/reducers/auth/auth.thunk';
import { connect , useSelector } from 'react-redux';
function Login(props) {
    const errors = useSelector(state => state.auth.errors)
    const [userData, setUserDate] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDate({ ...userData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        props.userLogin(data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h1 className={'my-4'}>Sign In</h1>
            { errors && errors.non_field_errors ?
                      <Alert color="danger">{errors.non_field_errors}</Alert>:null
            }
            <FormInput id='username' value={userData.username} onChange={handleChange} />
            <FormInput type={'password'} id='password' value={userData.password} onChange={handleChange} />
            <Button type='submit'>Login</Button>{' '}
            <Button type='reset'>Clear</Button> {' '}
            <Button>I don't hanve an account</Button>
        </Form>
    )
}

export default connect(null, { userLogin })(Login)
