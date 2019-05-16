export const AUTH_USER = "auth_user";
export const AUTH_ERROR = "auth_error";
export const EDIT_USER = "edit_user";

interface authPayload {
    message: string
};

interface AuthUserAction {
    type: typeof AUTH_USER
    payload: authPayload
}

export type Types = AuthUserAction;