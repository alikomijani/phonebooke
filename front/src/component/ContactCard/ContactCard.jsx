import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';

function ContactCard({ contact }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)
    const { first_name, last_name, email, mobile, is_favorite, address, id, birthday } = contact;
    return (
        <Card>
            <CardHeader>
                <div class="d-flex justify-content-between">
                    <div>
                        <span>
                            {first_name} {last_name}
                        </span>
                        <span className="mx-4">
                            {mobile}
                        </span>
                    </div>
                    <Button onClick={toggle}>toggle</Button>
                </div>

            </CardHeader>

            <Collapse isOpen={open}>
                <CardBody>
                    {address.country}
                    {address.city}
                    {address.street}
                </CardBody>
            </Collapse>

        </Card>
    )
}

export default ContactCard
