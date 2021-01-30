import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((user) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <img
                    src="https://assets.stickpng.com/images/5847fafdcef1014c0b5e48ce.png"
                    alt="logo"
                />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;
