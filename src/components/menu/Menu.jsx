import React from "react";
import s from "./menu.module.css";
import LinkText from "../linkText/LinkText";

export default props=> {

    const links = props.links.map( link => {
        return (
            <li className={s.menuLink} key={link.id}>
                <LinkText text={link.title} path={link.path}/>
            </li>
        )
    } )

    return (
        <section className={s.block}>
            {links}
        </section>
    )
}