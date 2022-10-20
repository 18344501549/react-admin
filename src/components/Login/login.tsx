import React, { useState } from 'react';
import '../../styles/login.scss';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import { loginData } from './loginType';
import { validate_password } from '../../utils/validate'
function Login() {

    const [code, setCode] = useState<string | number>('获取验证码');

    const getCode = () => {
        setCode(60);
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
                        rules={[{ required: true, message: '邮箱不能为空' }, { type: 'email', message: '邮箱格式不正确' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        className='from-item'
                        rules={[{ required: true, message: '密码不能为空' }, { pattern: validate_password, message: '请输入大于6位小于20位的数字+字母' }]}
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
                        rules={[{ required: true, message: '验证码不能为空' }]}
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