import React, { useState } from 'react';
import '../../styles/login.scss';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import { loginData, codeData } from './loginType'
function Login() {

    const [code, setCode] = useState('获取验证码');

    const getCode = () => {
        // setCode(60)
        // changeCode(codeData)
    }

    const changeCode = (val: codeData) => {

    }

    const onFinish = (values: loginData) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div id='login'>
            <div className='from-box'>
                <div className='registration'><span className='login-title'>登陆</span><span className='registration-title'>账号注册</span></div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        className='from-item'
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        className='from-item'
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            type="password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="code"
                        className='from-item'
                        rules={[{ required: true, message: '请输入验证码!' }]}
                    >
                        <Row gutter={10}>
                            <Col span={15}><Input prefix={<MailOutlined className="code-form-item-icon" />} placeholder="code" /></Col>
                            <Col span={9}>
                                <Button type="primary" onClick={getCode} block danger>{code}</Button>
                            </Col>
                        </Row>

                    </Form.Item>

                    <Form.Item className='from-item'>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
}

export default Login;