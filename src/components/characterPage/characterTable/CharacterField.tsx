import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback } from "react";
import { UrlRegexp } from "../../../common/UrlRegexp";

export type CharacterFieldProps = {
    keyName: string;
    value: string | string[];
};

export const CharacterField: React.FC<CharacterFieldProps> = ({ keyName, value }) => {
    const getLinkFromURL = useCallback((url: string) => {
        return <Link component="a" variant="body2" href={url} key={url}>
            {url}
        </Link>;
    }, []);

    const createLinksFromArray = useCallback((values: string[]) => {
        if (!values.length) {
            return "N/A";
        }
        return values.map(x => UrlRegexp.test(x) ? getLinkFromURL(x) : x);
    }, [getLinkFromURL]);

    const parsedValue = Array.isArray(value)
        ? createLinksFromArray(value)
        : UrlRegexp.test(value)
            ? getLinkFromURL(value)
            : value;

    return <Stack direction={"row"} gap={"10px"}>
        <Typography variant="body2" >
            {`${keyName}: `}
        </Typography>
        {
            Array.isArray(parsedValue)
                ? <Stack>
                    {parsedValue}
                </Stack>
                : <Typography variant="body2" color="text.secondary" >
                    {parsedValue || "N/A"}
                </Typography>
        }
    </Stack>;
};
