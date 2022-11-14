interface departmentType {
    name: string,
    number: number,
    status: boolean,
    content: string
};

interface departmentListType {
    pageNumber: number,
    pageSize: number,
    name?: string,
};

interface departmentListDataType {
    id: string,
    name: string,
    number: string,
    status: boolean
};

export type {
    departmentType,
    departmentListType,
    departmentListDataType
};