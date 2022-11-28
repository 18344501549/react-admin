interface positionType {
    parentId: number,
    jobName: string,
    status: boolean,
    content: string
};


interface positionListType {
    pageNumber: number,
    pageSize: number,
    name?: string,
};

export type {
    positionType,
    positionListType
};