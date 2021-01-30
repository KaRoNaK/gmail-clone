import { Checkbox, IconButton } from "@material-ui/core";
import {
    ArrowDropDown,
    ChevronLeft,
    ChevronRight,
    Inbox,
    KeyboardHide,
    LocalOffer,
    MoreVert,
    People,
    Redo,
    Settings,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";

import styles from "./EmailList.module.css";
import EmailRow from "./EmailRow/EmailRow";
import { db } from "../../firebase";
import Section from "../Section/Section";

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
            .orderBy("timeStamp", "desc")
            .onSnapshot((snapshot) => {
                console.log(snapshot.docs);
                setEmails(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });
    }, []);

    return (
        <div className={styles.emailList}>
            <div className={styles.emailList__settings}>
                <div className={styles.emailList__settingsLeft}>
                    <Checkbox />
                    <IconButton onClick={() => console.log(emails)}>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className={styles.emailList__settingsRight}>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className={styles.emailList__sections}>
                <Section Icon={Inbox} title="Primary" color="red" selected />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>

            <div className={styles.emailList__list}>
                {emails.map(
                    ({ id, data: { to, subject, message, timeStamp } }) => (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(
                                timeStamp?.seconds * 1000
                            ).toUTCString()}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default EmailList;
