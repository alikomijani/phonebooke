import React,{useState} from 'react';
import {FormInput} from '../../component/';
import {Form , Button} from 'reactstrap';
import {userRegister} from '../../redux/reducers/auth/auth.thunk';
import {connect} from 'react-redux';


function Register(props) {
    const [userData, setUserDate] = useState({})
    const handleChange = (e)=>{
        const {name , value} = e.target;
        setUserDate({...userData , [name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        props.userRegister(data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h1 className={'my-4'}>Register</h1>
            <FormInput id='username' value={userData.username} onChange={handleChange}/>
            <FormInput id='email' value={userData.email} onChange={handleChange}/>
            <FormInput type={'password'} id='password' value={userData.password} onChange={handleChange}/>
            <FormInput type={'password'} id='password2' value={userData.password2} onChange={handleChange}/>
            <Button type='submit'>Register</Button>{' '}
            <Button type='reset'>Clear</Button> {' '}
            <Button>Already hava an account!</Button>
        </Form>
    )
}

export default connect(null , {userRegister}) (Register)
