import React from 'react';
import { uniqBy } from 'lodash';
import './TagsView.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router";

const TagsView = (props: { tagsName: Array<[]>, selKey: string }) => {
    const { tagsName, selKey } = props;
    const tagsNameList = uniqBy(tagsName, 'name');
    // const { pathname } = useLocation();
    // console.log(pathname, 'pathnamel');
    /**初始化路由 */
    const navigate = useNavigate();

    const isActive = (router: string) => {
        return router === selKey;
    };

    const isAffix = (tag: { affix: boolean }) => {
        return tag.affix && true;
    };

    const closeSelectedTag = (e: React.MouseEvent<HTMLSpanElement>, tag: any, index: number) => {
        e.preventDefault();
        console.log(e);
        console.log(tag, 'tag');
        console.log(index, 'inde');
        //先把长度保存下来后面用来比较做判断条件
        // let length: number = tagsNameList.length - 1;
        // console.log(length, 'length');
        // if (index === 1) {
        //     navigate('/admin');
        // }

    };

    return (
        <div className='tags-view-container'>
            {tagsNameList.map((item: any, key: number) => {
                return <Link className={isActive(item.path) ? 'tags-view-item active' : 'tags-view-item'} key={key} to={item.path}>
                    {item.name}
                    {!isAffix(item) ? <span className='el-icon-close' onClick={(e) => closeSelectedTag(e, item, key)} /> : <></>}
                </Link>
            })}
        </div>
    );
};

export default TagsView;