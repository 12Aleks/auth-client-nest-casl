import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <Spinner animation="border" role="status" variant="primary" style={{height: '75px', width: '75px'}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default Loading;