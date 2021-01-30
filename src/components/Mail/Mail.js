import { IconButton } from "@material-ui/core";
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Email,
    LabelImportant,
    MoreVert,
    MoveToInbox,
    WatchLater,
    Error,
    UnfoldMore,
    Print,
    ExitToApp,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";

import styles from "./Mail.module.css";

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className={styles.mail}>
            <div className={styles.mail__tools}>
                <div className={styles.mail__toolsLeft}>
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className={styles.mail__toolsRight}>
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className={styles.mail__body}>
                <div className={styles.mail__bodyHeader}>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className={styles.mail__important} />
                    <p>{selectedMail?.title}</p>
                    <p className={styles.mail__time}>{selectedMail?.time}</p>
                </div>

                <div className={styles.mail__message}>
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
