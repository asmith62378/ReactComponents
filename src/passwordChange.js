import React, { Fragment } from "react";
import PasswordHelpingHand from "./passwordHelpingHand";
import ErrorListBox from "./errorListBox";

export default class extends React.Component {
  state = {
    password: "",
    confirmPassword: "",
    errors: []
  };

  handlePasswordChange = e => {
    e.persist();
    this.setState({ password: e.target.value });
    if (
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password !== this.state.confirmPassword
    ) {
      this.setState({
        errors: ["Confirm password must match your new password."]
      });
    }
  };

  handleConfirmPasswordChange = e => {
    e.persist();
    this.setState({ confirmPassword: e.target.value });
    if (
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password !== this.state.confirmPassword
    ) {
      this.setState({
        errors: ["Confirm password must match your new password."]
      });
    }
  };

  handlePasswordCompare = e => {
    e.persist();
    if (
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password !== this.state.confirmPassword
    ) {
      this.setState({
        errors: ["Confirm password must match your new password."]
      });
    }
  };

  componentDidMount() {
    console.log("Unmount complete");
  }

  render() {
    return (
      <Fragment>
        <div class="panel p2 clearfix noFooter test-width">
          <div class="content">
            <div class="col-4">
              <div class="clearfix mb3">
                <label htmlFor="current-password" class="col-5 mr1">
                  Current Password*
                </label>
                <div class="col-5">
                  <input
                    id="current-password"
                    name="current-password"
                    size="15"
                  />
                </div>
              </div>
              <div class="clearfix mb3">
                <label htmlFor="password" class="col-5 mr1">
                  New Password*
                </label>
                <div class="col-5">
                  <input
                    id="password"
                    name="password"
                    size="15"
                    onChange={this.handlePasswordChange}
                    onBlur={this.handlePasswordCompare}
                    value={this.state.password}
                  />
                </div>
              </div>
              <div class="clearfix mb2">
                <label htmlFor="confirm-password" class="col-5 mr1">
                  Confirm Password*
                </label>
                <div class="col-5">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    size="15"
                    onChange={this.handleConfirmPasswordChange}
                    onBlur={this.handlePasswordCompare}
                    value={this.state.confirmPassword}
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="col-11">
                <PasswordHelpingHand
                  name="password-hand"
                  value={this.state.password}
                  minLength="8"
                  maxLength="24"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
