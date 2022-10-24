import React, { useState } from 'react';
import '../../styles/login.scss';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Col, Row, Button, Form, Input, message } from 'antd';
import { loginData } from './loginType';
import { validate_password } from '../../utils/validate';
import { LoginApi, GetCode } from '../../api/loginApi';

function Login() {
    const [BtnDisabled, setBtnDisabled] = useState<boolean>(false);

    const [codeData, setCodeData] = useState<string>('');

    const [code, setCode] = useState<string | number>('获取验证码');

    const [codeLoding, setCodeLoding] = useState<boolean>(false);

    const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodeData(e.target.value);
    };

    /**倒计时 */
    // 409019683@qq.com
    const countDown = () => {
        let timer: NodeJS.Timeout | undefined;
        let time = 60;
        if (timer) {
            clearInterval(timer);
        };
        timer = setInterval(() => {
            time--;
            setCode(`${time}s`);
            if (time <= 0) {
                console.log(1);
                clearInterval(timer);
                setCode('重新获取验证码');
                setBtnDisabled(false);
            }
        }, 1000);
        setCodeLoding(false);
        setBtnDisabled(true);

    };

    const getCode = () => {
        if (!codeData) {
            message.warning('用户名不能为空', 1);
            return false;
        };

        setCode('发送中');
        setCodeLoding(true);

        GetCode({
            username: codeData,
            module: 'login'
        }).then(res => {
            countDown()
            console.log(res, 'res');
        }).catch(err => {
            console.log(err, 'err');
            setTimeout(() => {
                setCode('重新发送');
                setCodeLoding(false);
            }, 1500);
        });
    };

    const onFinish = (values: loginData) => {
        console.log('Received values of form: ', values);
        console.log(1);
        LoginApi(values).then(res => {
            console.log(res, 'res');

        }).catch(err => {

        });
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
                        <Input value={codeData} autoComplete="off" onChange={getUserName} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        className='from-item'
                        rules={[{ required: true, message: '验证码不能为空' }, { len: 6, message: '请输入六位数验证码' }]}
                    >
                        <Row gutter={10}>
                            <Col span={15}><Input prefix={<MailOutlined className="code-form-item-icon" />} placeholder="code" /></Col>
                            <Col span={9}>
                                <Button type="primary" onClick={getCode} block danger disabled={BtnDisabled} loading={codeLoding}>{code}</Button>
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