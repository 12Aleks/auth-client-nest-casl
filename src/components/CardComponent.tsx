import {FC} from 'react';
import {useRouter} from "next/router";
import {Button, Card, Col} from 'react-bootstrap';
import {IArticle, INews} from "../types";
import DefaultImage from '../../public/default.png'

interface ICardComponent {
    payload: IArticle | INews,
    classComponent: string
}

const CardComponent: FC<ICardComponent> = ({payload, classComponent}) => {
    const router = useRouter()

    return (
        <Col sm={12} md={6} lg={3}>
            <Card className={classComponent}>
                {
                    "urlToImage" in payload && payload.urlToImage && <Card.Img variant="top" src={payload.urlToImage}/>
                }
                <Card.Body>
                    <Card.Title>{payload.title}</Card.Title>
                    <Card.Text>
                        {payload.description}
                    </Card.Text>
                    <div className="d-grid">
                        {
                            "_id" in payload ?  <Button variant="primary" onClick={() => router.push( `/articles/` + payload._id)}>
                                Read more
                            </Button>: <Button>Read more</Button>
                        }

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardComponent;