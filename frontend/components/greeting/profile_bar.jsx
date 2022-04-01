import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CgProfile } from 'react-icons/cg'
class ProfileBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleDropDown = this.handleDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);

        this.state ={ display: false }
    }

    handleDropDown() {
        this.setState({ display: !this.state.display })
    }

    hideDropDown(e){
        if (e.target(e.relatedTarget)) return null;
        this.setState({ display: false})
    }


    render() {


        return (

        
        <div className="top profile bar">
            <div  className="profile-bar" >
    
            <CgProfile  onClick={this.handleDropDown} className="CgProfile"/>
            { this.state.display ? (
                        // <div className="profile-bar-other" onMouseLeave={this.hideDropDown}>
                            <div className="nav-bar-profile-show" onMouseLeave={this.hideDropDown}>
                                <h3 className="welcome-back">Welcome {this.props.currentUsername}</h3>
                                    <Link className="profile-dropdown" to={`/${this.props.currentUser}/profile`}>
                                         My Profile 
                                        </Link>
                                    <br />
                                    <br />
                                    <Link className="reservation-dropdown" to={`/${this.props.currentUser}/profile`}>My Reservations  </Link>
                                    <br />
                                    <br />
                                    <Link className="reviews-dropdown" to={`/${this.props.currentUser}/profile`}>My Reviews  </Link>
                                    <br />
                                    <button className="Sign-out-profile-button" onClick={this.props.logout}>
                                        Sign out
                                    </button>
                            </div>
                        // </div>
                    ) :
                        null
                    }




            </div>
        </div>
        )
    }
}

export default ProfileBar