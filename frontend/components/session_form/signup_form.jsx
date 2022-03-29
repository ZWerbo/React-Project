import React from "react";
import { login, logout } from "../../utils/session_api_util";
import { Link } from "react-router-dom";



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit= this.handleSubmit.bind(this)
    
    }

    componentDidMount() {
      this.props.clearErrors()
    }



    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors
        const user = Object.assign({}, this.state)
        this.props.signup(user)
    }

    // renderErrors() {
    //     return(
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }

    renderErrors() {
      const { errors } = this.props
      return(
        <ul className ="session-errors">
          {(errors.length === 0) ? (
            null
          ) : (
            errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
            ))
          )}
        </ul>
      );
    }



    render(){
        return (
            <div className="signup-form-container">
            <div onClick={this.props.closeModal} className="close-x" >X</div>
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <br/>
              { this.renderErrors() }


              <div className="signup-form">
                <br/>
          
                  <br />
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
            
                    className="signup-input"
                    placeholder="Username"
                  />
        
                <br/>
       
                  <br />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
              
                    className="signup-input"
                    placeholder="Email"
                  />
             
                <br/>
            
                  <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                    placeholder="Password"
                  />
         
                <br/>
              </div>
              <div className="signup-submit-container">
                <input className="signup-submit" type="submit" value="Sign up" />

              </div>


            </form>
          </div>
        )
    }
}

export default SignupForm