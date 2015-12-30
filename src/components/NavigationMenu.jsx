import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Modal from 'react-modal';
 
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'grey'
  },
  content : {
    top                   : '100px',
    left                  : '0px',
    right                 : '5px',
    bottom                : '0px',
    padding               : '0px',
    position                   : 'absolute',
    border                     : 'grey',
    background                 : 'grey',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

export default React.createClass({
  mixins: [PureRenderMixin],
 
  getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
 
  render: function() {
    return (
      <li className={this.props.className} onClick={this.openModal}>
        {this.props.src && <img src={this.props.src} />}
        <a href={this.props.href}>{this.props.label}</a>
      
      <Modal className={this.props.className + "-modal"}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
        <div className="column-two" ></div>
        <div className="column-two">
          <button onClick={this.closeModal}>close</button>
          <ul>
            <li>MyKin</li>
            <li>MyFriends</li>
            <li>MyGroups</li>
            <li>MyContent</li>
          </ul>
        </div>
      </Modal>
    </li>
    );
  }
});
 