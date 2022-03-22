import React from "react";
import { closeModal } from "../actions/modal";
import { connect } from "react-redux";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

// class Modal extends React.Component {
//     constructor(props){
//         super(props);
//         this.enableScrolling = this.enableScrolling.bind(this);
//     }

//     enableScrolling(){
//         document.body.classList.remove("disable-scroll");
//         this.props.closeModal();
//     };

//     render() {
//         const { modal } = this.props;

//         if (!modal) {
//           return null;
//         }
//         let component;
//         switch (modal) {
//           case 'login':
//             component = <LoginFormContainer />;
//             break;
//           case 'signup':
//             component = <SignupFormContainer />;
//             break;
//           default:
//             return null;
//         }
      
//         return (
//           <div className="form-background" onClick={this.props.closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//               { component }
//             </div>
//           </div>
//         );

//     }
// }

// const mapStateToProps = (state) => {
//     return ({
//         modal: state.ui.modal 
//     })
// }; 

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         closeModal: () => dispatch(closeModal())
//     })
// }; 

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);

// export default Modal;

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            <div>HEre is some stuff</div>
            </div>
        </div>
    )
};

export default Modal
