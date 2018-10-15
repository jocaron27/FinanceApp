/** Type definitions common across all components/store/state */
export namespace App {

    /** Global state */
    export type State = {
        user: User;
    };

    /** Logged in User */
    export type User = {
        id: string;
        email: string;
        error: Error;
    };

    /** Error response data */
    export type Error = {
        response: {
          data: string;
        }
    };
}