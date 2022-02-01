import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import { Input } from '../UI/Input/Input';

const emailReducer = (state, action) =>{
  if(action.type === 'USER_INPUT'){
    return {
      value: action.payload,
      isValid: action.payload.includes('@')
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {
    value: '',
    isValid: false
  }
}

const passwordReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {
    value: '',
    isValid: false
  }
} 

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value:'',
    isValid: false
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid: false
  });

  const {isValid: emailIsValid} = emailState;
  const {isValid:passwordIsValid} = passwordState;
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
  const identifier =  setTimeout(()=>{
      console.log("Checking form validity");
      setFormIsValid(
        emailState.isValid && passwordIsValid
      );
    },500)
    return ()=>{
      console.log("CLEANUP");
      clearTimeout(identifier)
    }
    
  }, [emailIsValid,passwordIsValid]);
  

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type:'USER_INPUT',
      payload: event.target.value
    });
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type:'USER_INPUT',
      payload: event.target.value
    })
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR',      
    })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type:'INPUT_BLUR'
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);      
    }else if(!emailIsValid){
      emailRef.current.focus()
    }else{
      passwordRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailRef}
          id="email" 
          label="E-Mail" 
          type="email" 
          isValid={emailIsValid} 
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
         />
        <Input 
          ref={passwordRef}
          id="password" 
          label="Password" 
          type="password" 
          isValid={passwordIsValid} 
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
         />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
