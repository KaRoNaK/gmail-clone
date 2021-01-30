import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

import styles from "./Header.module.css";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuPICAjEXYeOel6s3XEmiIMAyMB_ttFS4Jg&usqp=CAU"
                    alt="gmail"
                />
            </div>
            <div className={styles.header__middle}>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className={styles.header__inputCaret} />
            </div>
            <div className={styles.header__right}>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    );
}

export default Header;
