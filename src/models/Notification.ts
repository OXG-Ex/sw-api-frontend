
export type Notification = {
    messageText: string,
    messageColor: NotificationType;
    visible: boolean;
};

export enum NotificationType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}
