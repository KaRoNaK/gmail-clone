import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./EmailRow.module.css";
import { selectMail } from "../../../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        );

        history.push("/mail");
    };

    return (
        <div className={styles.emailRow} onClick={openMail}>
            <div className={styles.emailRow__options}>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <h3 className={styles.emailRow__title}>{title}</h3>

            <div className={styles.emailRow__message}>
                <h4>
                    {subject}
                    <span className={styles.emailRow__description}>
                        {" "}
                        - {description}
                    </span>
                </h4>
            </div>

            <p className={styles.emailRow__time}>{time}</p>
        </div>
    );
}

export default EmailRow;
