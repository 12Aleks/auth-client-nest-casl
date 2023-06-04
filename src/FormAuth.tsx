import React, {useState} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import {useApiDispatch, useApiSelector} from "./store/hoock";
import {userLogin, userSingUp} from "./store/actions/auth.action";


type Inputs = {
    email: string,
    password: string,
    name: string
};

const FormAuth = () => {
    const dispatch = useApiDispatch()
    const {isLoading, error, userToken} = useApiSelector(state => state.auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [singUp, setSingUp] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = data => {
        singUp ? dispatch(userLogin(data)) : dispatch(userSingUp(data))
    }


    return (
        <div className="card_style">
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <p className=" mb-5">
                            {
                                singUp ? 'Please fill out the form below to register!' : 'Please enter your login and password!'
                            }
                        </p>
                        <div className="mb-3">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    singUp && <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className="text-center">
                                            Name
                                        </Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Enter name"
                                                      defaultValue=""
                                                      {...register('name')}
                                                      required
                                        />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-center">
                                        Email address
                                    </Form.Label>
                                    <Form.Control type="email"
                                                  placeholder="Enter email"
                                                  defaultValue=""
                                                  {...register('email')}
                                                  required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        defaultValue=""
                                        {...register('password')}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <p className="small">
                                        <a className="text-primary" href="#!">
                                            Forgot password?
                                        </a>
                                    </p>
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        {singUp? 'Registration': 'Login'}
                                    </Button>
                                </div>
                            </Form>
                            <div className="mt-3">
                                <p className="mb-0  text-center">
                                    Don't have an account?{" "}
                                    <span className="text-primary fw-bold" style={{cursor: 'pointer'}} onClick={() => setSingUp(!singUp)}>
                                        <u>{singUp?  'Login': 'Registration'}</u>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FormAuth;