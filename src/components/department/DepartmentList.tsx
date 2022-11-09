import React, { useEffect, useState } from 'react';
import { DepartmentListApi } from '../../api/departmentApi';

const DepartmentList = () => {

    const [departmentList, setDepartmentList] = useState<[]>([]);

    useEffect(() => {
        DepartmentListApi().then(res => {
            console.log(res, 'rrrs');

        })
    }, [])

    return (
        <div>
            部门列表
        </div>
    );
};

export default DepartmentList;