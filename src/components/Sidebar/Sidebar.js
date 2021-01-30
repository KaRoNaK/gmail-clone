import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import { useDispatch } from "react-redux";

import styles from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import {
    AccessTime,
    Duo,
    ExpandMore,
    LabelImportant,
    NearMe,
    Note,
    Person,
    Phone,
    Star,
} from "@material-ui/icons";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className={styles.sidebar}>
            <Button
                startIcon={<AddIcon fontSize="large" />}
                className={styles.sidebar__compose}
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption
                Icon={InboxIcon}
                title="Inbox"
                number={54}
                selected
            />
            <SidebarOption Icon={Star} title="Starred" number={54} />
            <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
            <SidebarOption
                Icon={LabelImportant}
                title="Important"
                number={54}
            />
            <SidebarOption Icon={NearMe} title="Sent" number={54} />
            <SidebarOption Icon={Note} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number={54} />

            <div className={styles.sidebar__footer}>
                <div className={styles.sidebar__footerIcons}>
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
