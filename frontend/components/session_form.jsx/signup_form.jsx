import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        email: '',
        firstName: '',
        lastName: '',
        birthdate: '',
        password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
        this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
    .then(() => this.props.history.push('/'))
  }

  renderErrors() {
    return(
      <ul>
          {this.props.errors.map((error, i) =>(
              <li key={`error-${i}`}>
                  {error}
              </li>
          ))}
      </ul>
    )
  }

  render() {  
    return(
      <div className="session-form">
          <h2>Sign up!</h2>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <label htmlFor="">Email:
                <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <label htmlFor="">First Name:
                <input type="text" value={this.state.firstName} onChange={this.handleInput('firstName')} />
            </label>
            <label htmlFor="">Last Name:
                <input type="text" value={this.state.lastName} onChange={this.handleInput('lastName')} />
            </label>
            <label htmlFor="">Birthdate:
                <input type="date" value={this.state.birthdate} onChange={this.handleInput('birthdate')} />
            </label>
            <label htmlFor="">Password:
                <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <button onClick={this.handleSubmit}>Sign up</button>
          </form>  
      </div>
    )
  }
}

export default Signup;