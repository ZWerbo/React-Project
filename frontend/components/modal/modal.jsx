import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { closeModal } from "../../actions/modal";
import EditReviewFormContainer  from "../review/edit_review_form_container";
import ReviewFormContainer from "../review/review_form_container";


const Modal = ({modal, closeModal, ownProps}) => {
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case 'edit':
        component = <EditReviewFormContainer ownProps={ownProps} />;
        break
      case 'write':
        component = <ReviewFormContainer ownProps={ownProps} />
        break
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
  
  const mapStateToProps = (state, ownProps) => {
    return {
      modal: state.ui.modal,
      ownProps: ownProps
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);