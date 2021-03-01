import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import { Transition, CSSTransition } from 'react-transition-group';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          className='Button'
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div
              style={{
                backgroundColor: 'green',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}
            ></div>
          )}
        </Transition>

        <br />
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={{ enter: 400, exit: 2000 }}
          mountOnEnter
          unmountOnExit
          onEnter={console.log('1')}
          onEntering={console.log('2')}
          onEntered={console.log('3')}
          onExit={console.log('1')}
          onExiting={console.log('2')}
          onExited={console.log('3')}
        >
          {state => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}
        <CSSTransition
          in={this.state.modalIsOpen}
          timeout={{ enter: 400, exit: 2000 }}
          mountOnEnter
          unmountOnExit
          classNames={{ enterActive: 'ModalOpen', exitActive: 'ModalClose' }}
          // classNames='fade-slide'
        >
          <Modal closed={this.closeModal} />
        </CSSTransition>
        {/* animate in still works */}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
