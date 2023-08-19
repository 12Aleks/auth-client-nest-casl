import React from 'react';
import {Form} from "react-bootstrap";

const NewArticle = () => {
    let formattedDate:string = new Intl.DateTimeFormat('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(new Date());

    console.log(formattedDate)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add an image to the article</Form.Label>
            <Form.Control type="file" />
            </Form.Group>
        </Form>

    );
};

export default NewArticle;