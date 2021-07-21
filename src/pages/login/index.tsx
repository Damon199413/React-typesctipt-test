import React, { FC } from "react";
import { Button } from "@material-ui/core";

import CreatePassword from "../../components/create-password";
import './style.scss';
const LoginPage: FC = (props) => {
  return <div className="login-page">
    <div className="header">
      <span>up</span>stock
    </div>
    <div className="content">
      <CreatePassword />
    </div>
  </div>
}
export default LoginPage