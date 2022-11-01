import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CodeBtn from '../codebtn/CodeBtn';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Col, Row, Button, Form, Input } from 'antd';
import { loginData } from '../loginType';
import { validate_password } from '../../../utils/validate';
import { LoginApi, Register } from '../../../api/loginApi';
import CryptoJS from "crypto-js";
import { setToKen } from '../../../utils/tokenType';

const LoginForm = () => {

    /**初始化路由 */
    const navigate = useNavigate();

    const [formType, setFormType] = useState<string>('login');

    const [form] = Form.useForm();

    const loginSwitch = () => {
        setFormType('login');
        if (formType !== 'login') {
            form.resetFields();
        };
    };

    const registerSwitch = () => {
        setFormType('register');
        if (formType !== 'register') {
            form.resetFields();
        };
    };

    const [codeData, setCodeData] = useState<string>('');

    const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodeData(e.target.value);
    };
    // 858848357@qq.com
    const onFinish = (values: loginData) => {
        let requestData = {
            username: values.username,
            password: CryptoJS.MD5(values.password).toString(),
            code: values.code
        }
        console.log('Received values of form: ', requestData);
        if (formType === 'login') {
            LoginApi<{ token: string }>(values).then(res => {
                setTimeout(() => { setToKen(res.token); navigate('/admin'); }, 1000)
                console.log(res, 'res');
            }).catch(err => {
                console.log(err, 'err');
            });

        } else {
            Register(values).then(res => {
                console.log(res, 'res');
            }).catch(err => {
                console.log(err, 'err');
            });

        }

    };

    return (
        <div>
            <div className='registration'><span className='login-title' onClick={loginSwitch}>登陆</span><span className='registration-title' onClick={registerSwitch}>账号注册</span></div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                //要清空form表单必须要在Form标签上增加form属性
                form={form}
            >
                <Form.Item
                    name="username"
                    className='from-item'
                    rules={[{ required: true, message: '邮箱不能为空' }, { type: 'email', message: '邮箱格式不正确' }]}
                >
                    <Input value={codeData} autoComplete="off" onChange={getUserName} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                </Form.Item>
                <Form.Item
                    name="password"
                    className='from-item'
                    rules={[{ required: true, message: '密码不能为空' }, { pattern: validate_password, message: '请输入大于6位小于20位的数字+字母' }]}
                >
                    <Input
                        type="password"
                        autoComplete="off"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="请输入密码"
                    />
                </Form.Item>
                {formType === 'register' ? (
                    <Form.Item
                        name="passwords"
                        className='from-item'
                        rules={[{ required: true, message: '再次确认密码不能为空' }, ({ getFieldValue }) => ({
                            validator(role, value) {
                                if (value !== getFieldValue("password")) {
                                    return Promise.reject("两次密码不一致")
                                }
                                return Promise.resolve();
                            }
                        })]}
                    >
                        <Input
                            type="password"
                            autoComplete="off"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="请再次输入密码"
                        />
                    </Form.Item>
                ) : <></>}
                <Form.Item
                    name="code"
                    className='from-item'
                    rules={[{ required: true, message: '验证码不能为空' }, { len: 6, message: '请输入六位数验证码' }]}
                >
                    <Row gutter={10}>
                        <Col span={15}><Input prefix={<MailOutlined className="code-form-item-icon" />} placeholder="验证码" /></Col>
                        <Col span={9}>
                            <CodeBtn codeData={codeData} formType={formType} />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item className='from-item'>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        {formType === 'register' ? '注册' : '登陆'}
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default LoginForm;