import { Button, Switch } from 'antd';
import React, { useEffect, useState, Fragment, useCallback, MouseEvent } from 'react';
import { PositionListApi } from '../../api/positionApi';
const PositionList = () => {
    // 当前页
    const [pageNumber, setPageNumber] = useState<number>(1);
    // 当前页大小
    const [pageSize, setPageSize] = useState<number>(10);
    const [ID, setID] = useState<string>('');

    const [selectAll, setSelectAll] = useState<string[]>([]);

    const [total, setTotal] = useState<number>();

    const Status = (checked: any, record: any) => {

    };

    const handleDel = (e: any, record: any) => {

    };

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
            render: (text: any, record: any) => {
                return <Switch onChange={(checked) => { Status(checked, record) }} checkedChildren={record.status ? '开启' : '关闭'} unCheckedChildren={record.status ? '开启' : '关闭'} defaultChecked={record.status} />;
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
            render: (text: any, record: any) => {
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

    return (
        <div>
            职位列表
        </div>
    );
};

export default PositionList;