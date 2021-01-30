import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import firebase from "firebase";

import styles from "./SendMail.module.css";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase";

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className={styles.sendMail}>
            <div className={styles.sendMail__header}>
                <h3>New message</h3>
                <Close
                    onClick={() => dispatch(closeSendMessage())}
                    className={styles.sendMail__close}
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    ref={register({ required: true })}
                />
                {errors.to && (
                    <p className={styles.sendMail__error}>To is required</p>
                )}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register({ required: true })}
                />
                {errors.subject && (
                    <p className={styles.sendMail__error}>
                        Subject is required
                    </p>
                )}
                <input
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className={styles.sendMail__message}
                    ref={register({ required: true })}
                />
                {errors.message && (
                    <p className={styles.sendMail__error}>
                        Message is required
                    </p>
                )}

                <div className={styles.sendMail__options}>
                    <Button
                        className={styles.sendMail__send}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
