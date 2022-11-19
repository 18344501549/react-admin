import React, { useEffect, useState, Fragment, useCallback, MouseEvent } from 'react';
import { DepartmentListApi, DelectDepartmentApi, StatusDepartmentApi } from '../../api/departmentApi';
import { Button, Form, Input, Table, Switch, Modal } from 'antd';
import { departmentListDataType } from './departmentType'
import './component/DepartmentList.scss'


const DepartmentList = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // 渲染列表
    const [departmentList, setDepartmentList] = useState<departmentListDataType[]>([]);
    const [statusLoding, setStatusLoding] = useState<boolean>(false);
    // 当前页
    const [pageNumber, setPageNumber] = useState<number>(1);
    // 当前页大小
    const [pageSize, setPageSize] = useState<number>(10);

    const [ID, setID] = useState<string>('');

    const [selectAll, setSelectAll] = useState<string[]>([]);

    // 初始化
    const loadData = useCallback(async (name?: string) => {
        await DepartmentListApi<{ data: any, total: number }>({ name: name, pageNumber: pageNumber, pageSize: pageSize, }).then(res => {
            const data = [...res.data];
            console.log(data, 'rrrs');
            setDepartmentList(data);
        });
    }, [pageNumber, pageSize]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const columns = [
        {
            title: '部门名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '禁启用',
            dataIndex: 'status',
            key: 'status',
            render: (text: any, record: departmentListDataType) => {
                return <Switch onChange={(checked) => { Status(checked, record) }} checkedChildren={record.status ? '开启' : '关闭'} unCheckedChildren={record.status ? '开启' : '关闭'} defaultChecked={record.status} loading={statusLoding} />;
            }
        },
        {
            title: '人员数量',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            width: 210,
            render: (text: any, record: departmentListDataType) => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Button type="link" block>
                            编辑
                        </Button>
                        <Button type="link" danger onClick={(e) => { handleDel(e, record) }}>
                            删除
                        </Button>
                    </div>
                )
            },
        },
    ];

    const departmentlistForn = (values: { name: string }) => {
        console.log(values);
        loadData(values.name);
    };
    // 删除部门
    const handleDel = (e: MouseEvent, row: { id: string }) => {
        setIsModalOpen(true);
        console.log(row.id);
        setID(row.id);
    };

    // 禁启用
    const Status = (checked: boolean, record: any) => {
        console.log(checked, 'checked');
        setStatusLoding(true);
        console.log(record, 'record');
        StatusDepartmentApi({ id: record.id, status: checked }).then(res => {
            console.log(res);
            setTimeout(() => { setStatusLoding(false); }, 1000)
            loadData();
        });
    };

    // 批量删除
    const delAll = () => {
        console.log(1);
        console.log(selectAll, 'selectAll');
        setIsModalOpen(true);
        if (isModalOpen) {
            handleOk();
        };
    };

    // 表格可选
    const rowSelection = {
        onChange: (selectedRowKeys: any, selected: any, selectedRows: any) => {
            console.log(selectedRowKeys, 'record');
            console.log(selected, 'selected');
            if (!selected.length) {
                setSelectAll([]);
                return;
            };
            // setSelectRowKes([...selectRowKes, ...selectedRowKeys]);
            setSelectAll([...selectedRowKeys, ...selectAll]);
        },
        onSelectAll: (record: any, selectedRows: any) => {
            console.log(record, '1');
            if (!record) {
                setSelectAll([]);
                return;
            };
            console.log(selectedRows, 'selectedRows1');
        },
    };
    // 弹窗成功回调
    const handleOk = () => {
        console.log(ID);
        let selectAlls = selectAll.join();
        DelectDepartmentApi({ id: ID || selectAlls }).then(res => {
            console.log(res);
            loadData();
            setID('');
            setSelectAll([]);
        });
        setIsModalOpen(false);
        console.log(1);
    };
    // 弹窗失败回调
    const handleCancel = () => {
        setID('');
        setIsModalOpen(false);
        console.log(2);
    };


    return (
        // {Fragment可以不用必须有一个真实的DOM根标签了}
        <Fragment>
            <Form layout="inline" onFinish={departmentlistForn}>
                <Form.Item label="部门名称" name={'name'} className='departmentlist-name'>
                    <Input autoComplete="off" placeholder="请输入部门名称" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">搜索</Button>
                </Form.Item>
            </Form>
            <div>
                {departmentList.length ? <Table style={{ height: '60%' }} rowSelection={rowSelection} dataSource={departmentList} columns={columns} rowKey={record => record.id} bordered /> : <></>}
                {departmentList.length ? <Button onClick={delAll}>批量删除</Button> : <></>}
            </div>
            <Modal title="是否删除该部门" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>是否删除该信息,删除后无法恢复!!</p>
            </Modal>
        </Fragment>
    );
};

export default DepartmentList;