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
        this.props.login(user)
        // .then(this.props.closeModal())
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
        return(
            <div id="login" className="login-form-container">
            <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
           { this.renderErrors() }
           <br />
                <br />
   
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Username"
                    />
         
           
                <br />
                        <br />
                 
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                    />
           

                <input className="session-submit" type="submit" value="Login" />
            <button className="demo-login" onClick={this.handleDemo}>Demo User</button>
            <br />
            <p>Dont have an account?</p>
            <p>{this.props.otherForm}</p>
            </form>
          </div>
        )
    }
}

export default LoginForm
// renderErrors(){
//     return (
//         <ul className="form-errors">
//             {this.props.errors.map((error, idx) => (
//                <li key={idx}>{error}</li>
//                )
//             )}
//         </ul>
//     );
// }