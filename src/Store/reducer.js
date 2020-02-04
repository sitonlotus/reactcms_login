import * as constants from './actionTypes.js';

//默认的数据

const defaultState={
    loginStatus:false,
};
export default (state = defaultState,action) =>{
    switch (action.type) {
        case constants.LOGIN:
            // const newState=JSON.parse(JSON.stringify(state));
            // newState.loginStatus=action.tempLoginStatus;
            // console.log("state",state)
            // console.log("action",action)
            return {
                ...state,
                loginStatus:action.tempLoginStatus
            };
            break;
        default:
            break;
    }
    return state;
}