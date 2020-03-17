import React from "react";
import ForgottenPassword from './ForgotPassword'
import "./App.css"

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: ""
      },
      password: {
        value: ""
      }
    };
  }

  updateName(name) {
    this.setState({ name: { value: name } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;
    console.log("Name: ", name.value);
    console.log("Password: ", password.value);
  }

  //validateName()
  validatePassword() {
      const password = this.state.password.value.trim();
      if (password.length === 0) {
          return "Password is required"
      } else if (password.length < 6 ) {
          return "Password must be at least 6 characters long";
      } else if (!password.match(/[0-9]/)) {
          return "Password must contain at least one number"
      }
  }
  render() {
      //const nameError = this.validateName();
      const passwordError = this.validatePassword();

    return (
      <form
        className="input"
        onSubmit={e => this.handleSubmit(e)}
      >
          <fieldset name="input_form">
        <legend>Please enter your information</legend>
        <div className="input-form-group">
          <label htmlFor="name">Name:</label>
        
          <input
            type="text"
            className="input__control"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />
        </div>
        <div className="input-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input__control"
            name="password"
            id="password"
            onChange={e => this.updatePassword(e.target.value)}
          />
        </div>
        <div className="input_submit_button">
          <button type="submit" className="submit_button">
            Submit{" "}
          </button>
          <br />
          <br />
        </div>
        <ForgottenPassword />
        </fieldset>
      </form>
    );
  }
}

export default InputForm;
