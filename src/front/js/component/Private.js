import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Private = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.logged) {
            actions.verifyAuthToken();
        }
    }, [store.logged]);

    return (
        <div className="text-center">
            {store.logged ? (
                <div>
                    <h1>Welcome, {store.user.email}!</h1>
                    <p>This is a protected route.</p>
                </div>
            ) : (
                <div>
                    <h1>Unauthorized</h1>
                    <p>You need to be logged in to access this page.</p>
                </div>
            )}
        </div>
    );
};

export default Private;