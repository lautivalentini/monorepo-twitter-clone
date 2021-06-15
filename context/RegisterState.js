import React, { useState } from "react";

import RegisterContext from "./RegisterContext";

const initialState = {
  data: {
    name: '',
    phone: '',
    month: '',
    day: '',
    year: '',
  }
};

const RegisterState = (props) => {
  const [state, setState] = useState(initialState);

  const addRegisterData = (payload, value) => {
    switch (payload) {
      case 'name': {
        return setState({
          ...state,
          data: {...state.data, name: value },
        });
      }
        
      case 'phone': {
        return setState({
          ...state,
          data: {...state.data, phone: value },
        });
      }
        
      case 'month': {
        return setState({
          ...state,
          data: {...state.data, month: value },
        });
      }
        
      case 'day': {
        return setState({
          ...state,
          data: {...state.data, day: value },
        });
      }
        
      case 'year': {
        return setState({
          ...state,
          data: {...state.data, year: value },
        });
      }
        
      default:
        return state;
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        registerData: state.data,
        addRegisterData
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterState;