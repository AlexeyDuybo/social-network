import React from "react";
import { Link } from "react-router-dom";
import s from "./avatar.module.css";

export default props => {


    const { img, path } = props;

     
    const Item = ()=> {

        if( img ){
            return(
                <span className={s.avatarItem} style={ { backgroundImage: `url(${img})` }}/>
            )
        } else {
            return(
                <span className={s.nonAvatarItem}>?</span>
            )
        }

    }


    if( path ){
        return (
            <Link className={s.link} to={path}>
                <Item/>
            </Link>
        )
    } else {
        return  <Item/>
    }

}