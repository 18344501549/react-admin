import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Radio } from 'antd';
import './component/DepartmentAdd.scss'

const DepartmentAdd = () => {
    const { TextArea } = Input;
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    // labelCol={{ span: 4 }}
    //     wrapperCol={{ span: 14 }}
    //     layout="horizontal"
    //     onValuesChange={onFormLayoutChange}
    //     disabled={componentDisabled}
    return (
        <div>
            <Form
                onFinish={onFinish}
            >
                <Form.Item label="部门名称" >
                    <Input />
                </Form.Item>
                <Form.Item label="人员数量" >
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item label="禁启用" >
                    <Radio.Group className='ml-12'>
                        <Radio value="apple"> 禁用 </Radio>
                        <Radio value="pear"> 启用 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="描述">
                    <TextArea rows={4} className='ml-14' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">确定</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default DepartmentAdd;