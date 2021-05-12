import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        debugger
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
                    <p className="login-header-text">Please Login</p> 
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

export default withRouter(LoginForm);

