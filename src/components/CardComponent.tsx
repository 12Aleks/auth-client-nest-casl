import React, {FC} from 'react';
import { Card } from 'react-bootstrap';
import {IArticle} from "../types";

interface ICardComponent{
    payload: IArticle
}
const CardComponent:FC<ICardComponent> = ({payload}) => {
    return (
        <Card style={{ width: '18rem', margin: '0 10px 10px' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{payload.title}</Card.Title>
                <Card.Text>
                    {payload.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;