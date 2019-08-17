import React from "react";
import { Route } from "react-router-dom";

import HeaderContainer from "../header/Header";
import MenuContainer from "../menu/MenuContainer";
import FriendsListContainer from "../friendsList/FriendsListContainer";

import s from "./content.module.css";

export default props=> {
    return(
        <div className={s.app}>
            <header className={s.header}>
                <HeaderContainer/>
            </header>
            <div className={s.main}>
                <aside className={s.menu}>
                    <MenuContainer/>
                </aside>
                <main className={s.content}>
                    <Route component={FriendsListContainer} path="/friends/"/>
                </main>
            </div>
        </div>
    )
}