import * as constants from './actionTypes.js';

import {postData} from './../Api/index.js';
//获取登录结果
export const loginDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/login.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            // console.log(res)
            if(res.data==="ok"){
                const tempLoginStatus = true;
                dispatch({
                    type:constants.LOGIN,
                    tempLoginStatus
                })
            }
        })
        .catch(()=>{
            alert('登录失败！')
        })
    }
};