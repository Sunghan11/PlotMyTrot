import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => {
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const signup = user => {
    // debugger
    return dispatch => {
        // debugger
        return APIUtil.signup(user)
            .then(user => {
                // debugger
                return dispatch(receiveCurrentUser(user))
                // return user;
            }).fail(err => dispatch(receiveErrors(err.responseJSON)));
    }
}

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            return user;
        }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);


export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())))
);
