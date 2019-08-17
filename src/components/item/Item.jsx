import React from "react";
import Avatar from "../avatar/Avatar";
import LinkText from "../linkText/LinkText";
import s from "./item.module.css";
export default props => {
    const { name, img, path } = props;

    return (
        <div className={s.item}>
            <div className={s.itemAvatar}>
                <Avatar img={img} path={path} />
            </div>
            <div className={s.itemData}>
                <div className={s.itemText}>
                    <LinkText text={name} path={path} /> 
                </div>
                <div className={s.itemContent}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}