import React, { Fragment } from "react";

const hasLower = value => {
  return value.length > 0 && new RegExp("[a-z]+").test(value);
};

const hasUpper = value => {
  return value.length > 0 && new RegExp("[A-Z]+").test(value);
};

const hasNumber = value => {
  return value.length > 0 && new RegExp("[0-9]+").test(value);
};

const hasSpecial = value => {
  return value.length > 0 && new RegExp("[.*@_-]+").test(value);
};

const hasBad = value => {
  return value.length > 0 && new RegExp("^[a-zA-Z0-9.*@_-]*$").test(value);
};

const hasLength = (min, max, value) => {
  return value.length >= min && value.length <= max;
};

const hasThree = value => {
  let count = 0;
  count += hasLower(value) ? 1 : 0;
  count += hasUpper(value) ? 1 : 0;
  count += hasSpecial(value) ? 1 : 0;
  count += hasBad(value) ? 1 : 0;
  return count >= 3;
};

export default class extends React.Component {
  state = {};

  render() {
    let { value, minLength, maxLength } = this.props;
    const lenCheck = hasLength(minLength, maxLength, value);
    const badCheck = hasBad(value);
    const threeCheck = hasThree(value);
    const specialCheck = threeCheck || hasSpecial(value);
    const numberCheck = threeCheck || hasNumber(value);
    const lowerCheck = threeCheck || hasLower(value);
    const upperCheck = threeCheck || hasUpper(value);
    const allCheck = threeCheck && lenCheck && badCheck;
    return (
      <Fragment>
        <ul class="login-check list-style-none mt0 pl0">
          <li>
            <div
              id="loginCheckPassAll"
              className={`login-check-${allCheck} col-12`}
            >
              <span class="login-rule col col-11">
                Your Password is case-sensitive and must meet the following
                criteria:
              </span>
            </div>
            <ul class="clearfix list-style-none pl0">
              <li
                id="loginCheckPassLength"
                className={`login-check-${lenCheck} col-12 pl2`}
              >
                <span class="login-rule col col-11">
                  Must be {minLength}-{maxLength} characters in length
                </span>
              </li>
              <li
                id="loginCheckPassBadChars"
                className={`login-check-${badCheck} col-12 pl2`}
              >
                <span class="login-rule col col-11">
                  Valid characters are A-Z, a-z, 0-9 and special characters
                  (.,*,@,_,-)
                </span>
              </li>
              <li
                id="loginCheckPassReqChars"
                className={`login-check-${threeCheck} col-12 pl2`}
              >
                <span class="login-rule col col-11">
                  Must contain 3 of the following:{" "}
                </span>
              </li>
              <li
                id="loginCheckPassLower"
                className={`login-check-${lowerCheck} col-12 pl3`}
              >
                <span class="login-rule col col-11">
                  {" "}
                  - 1 lower case character
                </span>
              </li>
              <li
                id="loginCheckPassUpper"
                className={`login-check-${upperCheck} col-12 pl3`}
              >
                <span class="login-rule col col-11">
                  {" "}
                  - 1 upper case character
                </span>
              </li>
              <li
                id="loginCheckPassNumber"
                className={`login-check-${numberCheck} col-12 pl3`}
              >
                <span class="login-rule col col-11"> - 1 number</span>
              </li>
              <li
                id="loginCheckPassSpecial"
                className={`login-check-${specialCheck} col-12 pl3`}
              >
                <span class="login-rule col col-11">
                  {" "}
                  - 1 special character (.,*,@,_,-)
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}
