import React, { useState } from 'react';
import { Button, message } from 'antd';
import { GetCode } from '../../../api/loginApi';
function CodeBtn(props: { codeData: string, formType: string }) {
    const { codeData, formType } = props
    const [BtnDisabled, setBtnDisabled] = useState<boolean>(false);
    const [code, setCode] = useState<string | number>('获取验证码');
    const [codeLoding, setCodeLoding] = useState<boolean>(false);
    /**倒计时 */
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
            module: formType
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
    return (
        <Button type="primary" onClick={getCode} block danger disabled={BtnDisabled} loading={codeLoding}>{code}</Button>
    );
}

export default CodeBtn;