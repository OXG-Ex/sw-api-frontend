import { Tooltip, Fab } from "@mui/material";
import { PropsWithChildren } from "react";
import { Fade } from "react-reveal";

export type FloatingButtonProps = {
    tooltipText: string;
    onClick: () => void;
    className?: string;
    show?: boolean;
};

export const FloatingButton: React.FC<FloatingButtonProps> = (props: PropsWithChildren<FloatingButtonProps>) => {
    return <Fade left when={props.show} mountOnEnter appear>
        <Tooltip title={props.tooltipText}>
            <Fab size="small" color="info" onClick={props.onClick} className={`left-button ${props.className}`}>
                {props.children}
            </Fab>
        </Tooltip>
    </Fade>;
};
