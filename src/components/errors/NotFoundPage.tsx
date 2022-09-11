import { Backdrop, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import RouterPaths from "../router/RoutePath";

export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const goHome = useCallback(() => {
        navigate(RouterPaths.Root);
    }, [navigate]);

    return <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <Stack>
            <Typography variant="h4">
                Wrong URL
            </Typography>

            <Link component="button" variant="h6" onClick={goHome}>
                Go to the root page!
            </Link>
        </Stack>
    </Backdrop>;
};
