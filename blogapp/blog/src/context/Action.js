export const LoginStart = (userCrendentials) =>({
    type:"LOGIN_START"
});


export const LoginSuccessfull =(user) =>({
    type:"LOGIN_SUCCESSFULL",
    payload:user,
});


export const LoginFailure = () =>({
    type:"LOGIN_FAILURE"
});

export const Logout = () =>({
    type:"LOGOUT"
});

export const UpdateStart = (userCrendentials) =>({
    type:"UPDATE_START"
});


export const UpdateSuccessfull =(user) =>({
    type:"UPDATE_SUCCESSFULL",
    payload:user,
});


export const UpdateFailure = () =>({
    type:"UPDATE_FAILURE"
});


