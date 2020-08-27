import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap';
import { ContactCard } from '../../component/';
import { connect, useSelector } from 'react-redux';
import { fetchContact } from '../../redux/reducers/contact/contact.thunk';
import { setLimit, setOffset } from '../../redux/reducers/contact/contact.actions';
import {userLogout} from '../../redux/reducers/auth/auth.thunk';
import CreateForm from '../../component/CreateForm/CreateForm';

function Contacts({ fetchContact, setOffset, setLimit ,userLogout}) {
    const contacts = useSelector(state => state.contacts.results);
    const limit = useSelector(state => state.contacts.filters.limit);
    const offset = useSelector(state => state.contacts.filters.offset);
    const count = useSelector(state => state.contacts.count);
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetchContact()
    }, [limit, offset])
    return (
        <Row xs={1}>
            <Button onClick={userLogout}>logout</Button>
            <Button onClick={() => setOpen(!open)}>add</Button>
            {
                contacts.map(item => (<Col key={item.id}>
                    <ContactCard contact={item} />
                </Col>))
            }
            <CreateForm isOpen={open} toggle={() => setOpen(!open)} />
        limit:
            <input onChange={(e) => setLimit(e.target.value)} type={'number'} value={limit} />
        offset:
            <input onChange={(e) => setOffset(e.target.value)} type={'number'} value={offset} />
            <Button onClick={() => setOffset(offset - limit)} disabled={offset == 0}>previous</Button>
            <Button onClick={() => setOffset(parseInt(offset) + parseInt(limit))} disabled={parseInt(offset) + parseInt(limit) >= parseInt(count)} >next</Button>
        </Row>
    )
}

export default connect(null, { fetchContact, setOffset, setLimit , userLogout })(Contacts)
