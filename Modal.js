import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.modalDefaults = {
      showTitle: true,
      title: "Attention!",
      body: 'Attention!',
      customBody: false,
      customBodyContent: '',
      cancelBtn: {
        name: 'OK'
      },
      confirmBtn: {
        name: 'Confirm'
      }
    }

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
        
        return (
          <div key={key} className='jt-modal-overlay' onClick={() => this.removeModal(key)}>
            <div className='jt-modal'  onClick={(e) => e.stopPropagation()} style={margins}>
              {modal.showTitle || modal.title ? <div className='modalHeader'>{modal.title || this.modalDefaults.title}</div> : ''}
              <div className='modalBody'>
                {modal.customBody && modal.customBodyContent ? modal.customBodyContent : modal.body || this.modalDefaults.body}
              </div>
              <div className='modalFooter'>
                {modal.cancelBtn ? <button onClick={() => this.removeModal(key)}>{modal.cancelBtn.name || this.modalDefaults.cancelBtn.name}</button> : ''}
                {modal.confirmBtn && modal.confirmBtnCallback ? <button onClick={(evt) => {modal.confirmBtnCallback(evt.target, key)}}>{modal.confirmBtn.name || this.modalDefaults.confirmBtn.name}</button> : ''}                 
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
