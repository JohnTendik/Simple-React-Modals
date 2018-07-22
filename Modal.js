import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modals: this.props.data
    }

    this.componentDidUpdate = (prevProps) => {
      if (this.props.data !== prevProps.data) {
        this.setState({modals: this.props.data});
      }
    }
  }

  componentDidUpdate() {
    this._render();
  }

  removeModal = (key) => {
    let currentModals = this.state.modals;
    currentModals.splice(key, 1);
    this.setState({modals: currentModals});
  }

  _render() {
    return (
      this.state.modals.map( (modal,key) => {
        let margins = {
          boxShadow: '-1px -1px 10px 1px #666', 
          marginLeft: key * 10 + 'px', 
          marginTop: key * 10 + 'px'
        };

        if ( 40 >= key * 10 && key * 10 <= 0 ) {
          margins = {
            boxShadow: '-1px -1px 10px 1px #666', 
            marginLeft: key * 10 + 'px', 
            marginTop: key * 10 + 'px'
          }
        }

        elseif ( 40 >= key * 10 && key * 10 <= 0 )
        
        return (
          <div key={key} className='jt-modal-overlay' onClick={() => this.removeModal(key)}>
            <div className='jt-modal'  onClick={(e) => e.stopPropagation()} style={margins}>
              <div className='modalHeader'>{modal.title || 'Attention'}</div>
              <div className='modalBody'>test body</div>
              <div className='modalFooter'>
                <button data-show='true' data-yztooltip='Cancel' className='tooltip my_checklist_actions_btn vc_general modalCancel' onClick={(ev) => {this.removeModal(key)}}>Cancel</button>                           
                <button data-show='true' data-yztooltip='Confirm' className='tooltip my_checklist_actions_btn vc_general modalConfirm' onClick={(ev) => {this.props.confirm(ev.target, key)}}>Confirm</button>                           
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    // Render a placeholder
    return ReactDOM.createPortal(
      this._render(),
      document.body
    );
  }

}

export default Modal;
