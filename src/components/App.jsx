import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    request: '',
  };
  handleFormSubmit = request => {
    this.setState({ request });
  };
  render() {
    return (
      <>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery request={this.state.request} />
          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
