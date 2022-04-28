import React from "react";

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { username: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

    componentDidMount() {
      this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user).then(this.props.closeModal())
        // this.props.history.push
    }

    handleDemo(e){
        e.preventDefault();
        const demoUser = Object.assign({} , this.props.demo)
        this.props.login(demoUser).then(this.props.closeModal)
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }



    renderErrors() {
        const { errors } = this.props
        return(
          <div className ="session-errors">
            {(errors.length === 0) ? (
              null
            ) : (
              errors.map((error, i) => (
              <ul className="login-errors" key={`error-${i}`}>
                {error}
              </ul>
              ))
            )}
          </div>
        );
      }

    
      
    render(){
        return(
            <div id="login" className="login-form-container">
            <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
           { this.renderErrors() }
           <br />
                <br />
                <br />
         
   
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Username"
                    required
                    />
         
           
                <br />
                        <br />
                 
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                    required
                    />
           

                <input className="session-submit" type="submit" value="Login" />
            <button className="demo-login" onClick={this.handleDemo}>Demo User</button>
            <br />
            <p className="dont-have">Dont have an account? <button className="login-signup-open" onClick={() => this.props.openModal('signup')}>Signup</button></p>

            </form>
          </div>
        )
    }
}

export default LoginForm
