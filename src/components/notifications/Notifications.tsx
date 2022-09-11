import { Snackbar, Alert } from "@mui/material";
import React, { useCallback } from "react";

import { AppContext } from "../../Context/AppContext";
import { ActionType } from "../../models/Actions";

export const Notifications: React.FC = () => {
    const { state, dispatch } = React.useContext(AppContext);

    const closeCallback = useCallback(() =>
        dispatch({ type: ActionType.SET_NOTIFICATION_VISIBILITY, payload: false }
        ), [dispatch]);

    return <Snackbar open={state.currentNotification.visible} autoHideDuration={6000} onClose={closeCallback} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity={state.currentNotification.messageColor} sx={{ width: '100%' }} onClose={closeCallback}>
            {state.currentNotification.messageText}
        </Alert>
    </Snackbar>;
};
