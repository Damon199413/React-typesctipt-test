import { Button } from "@material-ui/core";
// import { Icon } from '@material-ui/core';

import React, { FC } from "react";

import './style.scss'
const CreatePassword: FC = (props) => {
  return <div className="create-password">
    <div className="check-img"></div>
    <div className="success-text">You created a new password</div>
    <div className="alert-text">Please <span>Sign in</span> to continue</div>
    <Button variant="contained" color="primary" className="continue-btn">Continue</Button>
  </div>
}

export default CreatePassword;