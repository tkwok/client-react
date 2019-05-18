export const AUTH_USER = "auth_user";
export const AUTH_ERROR = "auth_error";
export const EDIT_USER = "edit_user";

/**
 * Auth Payload Interface definition
 * 
 * @interface AuthPayload
 */
interface AuthPayload {
    authenticated: boolean,
    errorMessage: string
};

/**
 * Auth Action Interfact
 * 
 * @interface AuthUserAction
 */
interface AuthUserAction {
    type: typeof AUTH_USER
    payload: AuthPayload
};

export type Types = AuthUserAction;