import React from 'react';


class ForgottenPassword extends React.Component {
    handleForgottenPassword() {
        alert ("Oh no! You forgot your password :(")
    }
  render() {
    return (
    <div>
        <a href="#" onClick={e => this.handleForgottenPassword(e)}>
        Forgot your password?
        </a>
            </div>
  );
}
}

export default ForgottenPassword;
