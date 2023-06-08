import React, {FC} from 'react';
import {Button, Card} from "react-bootstrap";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface IError {
    error: any,
    returnFn?: () => void
}

const Error: FC<IError> = ({error, returnFn}) => {


    return (
        <div className="card_style">
            <div className="border border-3 border-warning"></div>
            <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-3 text-center">Error</h2>
                        <p className="text-center fw-bold mb-4">{error}</p>
                        <div className="d-grid">
                            <Button variant="primary" onClick={() => returnFn ? returnFn() : ''}>
                                Return to login page
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Error;