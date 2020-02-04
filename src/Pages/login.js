import React from 'react';
import {connect} from 'react-redux';
import {loginDataAction} from '../Store/action';

class Login extends React.Component{
    componentDidMount(){
        this.props.getLoginData();
    }
    
    render(){
        if(this.props.loginData){
            this.props.history.push("/home")
        }

        return(
            <div>
                <h2>登录页面</h2>
                <input type="text" ref="uname"/>
                <input type="text" ref="pwd"/>
                <input type="button" value="提交" onClick={this.subLogin.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state",state);
    return {
        loginData:state.loginStatus
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getLoginData:()=>{
            dispatch(loginDataAction(["lzl",12345678]));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);