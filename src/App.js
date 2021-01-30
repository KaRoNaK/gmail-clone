import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            }
        });
    }, []);

    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className={styles.app}>
                    <Header />
                    <div className={styles.app__body}>
                        <Sidebar />
                        <Switch>
                            <Route path="/mail">
                                <Mail />
                            </Route>
                            <Route path="/">
                                <EmailList />
                            </Route>
                        </Switch>
                    </div>
                    {sendMessageIsOpen && <SendMail />}
                </div>
            )}
        </Router>
    );
}

export default App;
