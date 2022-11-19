import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { deleteTags, selectTagsView } from '../../../app/tagsViewSlice/tagsViewSlice';
import { useLocation } from "react-router";
import './TagsView.scss';

const TagsView = () => {
    // 获取redux里面tagsView的数据
    const tagsViewList = useAppSelector(selectTagsView);
    // 初始化redux的调用方法
    const dispatch = useAppDispatch();
    // 当前路由路径
    const { pathname } = useLocation();

    /**初始化路由 */
    const navigate = useNavigate();
    // 路径相同激活选项
    const isActive = (router: string) => {
        return router === pathname;
    };
    // 有affix熟悉不添加角标
    const isAffix = (tag: { affix: boolean }) => {
        return tag.affix;
    };
    // 关闭tagsView
    const closeSelectedTag = (e: React.MouseEvent<HTMLSpanElement>, tag: any, index: number) => {
        e.preventDefault();
        console.log(index, 'inde');
        //先把长度保存下来后面用来比较做判断条件
        let length = tagsViewList.length - 1;
        //调用redux删除数组方法
        dispatch(deleteTags(tag));
        console.log(length, 'length');
        // 如果关闭的标签不是当前路由的话，就不跳转
        if (tag.path !== pathname) {
            return;
        };
        // 判断：如果index和length是一样的，那就代表都是一样的长度，就是最后一位，那就往左跳转一个
        if (index === length) {
            //再判断：如果length=0，也就是说你删完了所有标签
            if (length === 1) {
                //那么再判断：如果当前路由不等于index，也就是我首页的路由
                if (pathname !== "/admin/dashboard") {
                    //那么就跳转首页。这一步的意思是：如果删除的最后一个标签不是首页就统一跳转首页，如果你删除的最后一个标签是首页标签，已经在这个首页路由上了，你还跳个什么呢。这不重复操作了吗。
                    navigate('/admin/dashboard');
                };
            } else {
                //那么，如果上面的条件都不成立，没有length=0.也就是说你还有好几个标签，并且你删除的是最后一位标签，那么就往左边挪一位跳转路由
                navigate(tagsViewList[index - 1].path);
            }
        } else {
            // 如果你点击不是最后一位标签，点的前面的，那就往右边跳转
            navigate(tagsViewList[index + 1].path);
        };
    };

    return (
        <div className='tags-view-container'>
            {tagsViewList.map((item: any, key: number) => {
                return <Link className={isActive(item.path) ? 'tags-view-item active' : 'tags-view-item'} key={key} to={item.path}>
                    {item.name}
                    {!isAffix(item) ? <span className='el-icon-close' onClick={(e) => closeSelectedTag(e, item, key)} /> : <></>}
                </Link>
            })}
        </div>
    );
};

export default TagsView;