import React, { useState } from 'react';
import { Form, Icon, Input, Button, notification } from "antd";
import { signInApi } from '../../../api/user';

import "./LoginForm.scss";

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInputs ({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        signInApi(inputs);
    };

    return (
        <Form className="login-form">
            <Form.item>
                <Input
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="login-form__input"
                />
            </Form.item>
            <Form.item>
            <Input
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />  
            </Form.item>
            <Form.item>
                <Button htmltype="submit" className="login-form__button">
                    Entrar
                </Button>   
            </Form.item>
        </Form>
    );
}