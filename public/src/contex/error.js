import { errorr } from './contex';
import React, { useState } from 'react';

export default function C_error(props) {
    const [log_err,setlog_err]=useState({
        error:false,
        massage:String
    })
    const [sin_err,setsin_err]=useState({
        error:false,
        massage:String
    })
  return (
    <errorr.Provider value={{log_err,setlog_err,sin_err,setsin_err}}>
        {props.children}
    </errorr.Provider>
  )
}
