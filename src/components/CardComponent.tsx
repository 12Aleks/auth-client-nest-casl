import {FC} from 'react';
import {useRouter} from "next/router";
import {Button, Card} from 'react-bootstrap';
import {IArticle} from "../types";

interface ICardComponent{
    payload: IArticle
}
const CardComponent:FC<ICardComponent> = ({payload}) => {
    const router = useRouter()

    return (
        <Card style={{ width: '18rem', margin: '0 10px 10px' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{payload.title}</Card.Title>
                <Card.Text>
                    {payload.description}
                </Card.Text>
                <div className="d-grid" >
                    <Button variant="primary" onClick={() => router.push(`/articles/` + payload._id)}>
                       Read more
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;