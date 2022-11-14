import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, message, Radio } from 'antd';
import { departmentType } from '../department/departmentType';
import { DepartmentAddApi } from '../../api/departmentApi';
import './component/DepartmentAdd.scss';

const DepartmentAdd = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const { TextArea } = Input;
    const onFinish = (values: departmentType) => {
        console.log('Received values of form: ', values);
        if (!values.name) {
            message.error('部门不能为空');
            return false;
        };
        if (!values.number || values.number < 0) {
            message.error('数量不能小于等于0');
            return false;
        };
        if (!values.content) {
            message.error('描述不能为空');
            return false;
        };
        DepartmentAddApi(values).then(res => {
            setLoading(true);
            setTimeout(() => {
                form.resetFields();
                setLoading(false);
            }, 1500)

            console.log(res, 'res');
        })
    };

    return (
        <div>
            <Form
                form={form}
                initialValues={{ status: true, number: 1 }}
                onFinish={onFinish}
            >
                <Form.Item label="部门名称" name={'name'} className='department-name'>
                    <Input autoComplete="off" placeholder="请输入部门名称" />
                </Form.Item>
                <Form.Item label="人员数量" name={'number'} >
                    <InputNumber max={100} />
                </Form.Item>
                <Form.Item label="禁启用" name={'status'}>
                    <Radio.Group className='ml-12'>
                        <Radio value={false}> 禁用 </Radio>
                        <Radio value={true}> 启用 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="描述" name={'content'} className='department-description' >
                    <TextArea rows={4} className='ml-24' />
                </Form.Item>
                <Form.Item className='department-btn'>
                    <Button loading={loading} type="primary" htmlType="submit" className="department-form-btn">确定</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default DepartmentAdd;