import React from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";

import "./RegisterForm.scss";

export default function RegisterForm( ) {
    return (
        <Form className="register-form">
            <Form.Item>
                <Input
                    prefix= {<Icon type="user" style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix= {<Icon type="lock" style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix= {<Icon type="lock" style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacePolicy">
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmltype="submit" className="register-form_button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}