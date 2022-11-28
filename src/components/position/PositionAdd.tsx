import React, { useState } from 'react';
import { Button, Form, Input, message, Radio, Select, } from 'antd';
import { PositionAddApi } from '../../api/positionApi';
import { positionType } from './positionType';

const PositionAdd = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm();

    const { TextArea } = Input;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onFinish = (values: positionType) => {
        console.log(values, 'values');
        if (!values.jobName) {
            message.error('职位不能为空');
            return false;
        };
        if (!values.content) {
            message.error('描述不能为空');
            return false;
        };
        PositionAddApi(values).then(res => {
            setLoading(true);
            setTimeout(() => {
                form.resetFields();
                setLoading(false);
            }, 1500);
        })
    };

    const positionOptoons = [{ value: 760, label: '研发部' }, { value: 757, label: '行政部' }, { value: 1081, label: '市场部' }];


    return (
        <div>
            <Form form={form} onFinish={onFinish} initialValues={{ status: true, parentId: 760 }}>
                <Form.Item label="所在部门" name={'parentId'} style={{ width: 400 }}>
                    <Select
                        onChange={handleChange}
                        options={positionOptoons}
                    />
                </Form.Item>
                <Form.Item label="职位名称" name={'jobName'} style={{ width: 400 }}>
                    <Input autoComplete="off" placeholder="请输入职位" />
                </Form.Item>
                <Form.Item label="禁启用" name={'status'} style={{ marginLeft: 12 }}>
                    <Radio.Group >
                        <Radio value={false}> 禁用 </Radio>
                        <Radio value={true}> 启用 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="描述" name={'content'} style={{ width: 380, marginLeft: 24 }} >
                    <TextArea rows={4} className='ml-24' />
                </Form.Item>
                <Form.Item className='department-btn'>
                    <Button type="primary" htmlType="submit" className="department-form-btn" loading={loading}>确定</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PositionAdd;