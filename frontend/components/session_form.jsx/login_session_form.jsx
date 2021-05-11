import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2 className="welcome-h2">Welcome to WhereBNB!</h2>
                    <p className="login-header-text">Please Login</p> or SignUP!
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <label htmlFor="">Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                        </label>
                        <label htmlFor="">Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        </label>
                        <input type="submit" className="login-submit" value="Login" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginSessionForm);

