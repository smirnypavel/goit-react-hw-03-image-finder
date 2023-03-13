import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
// import Modal from './Modal';

export class App extends Component {
  state = {
    request: '',
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };
  render() {
    const { request } = this.state;
    return (
      <>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />

          <ImageGallery request={request} />

          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
