import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import fetchImages from 'components/FetchData';
import styled from './ImageGallery.module.css';
import Modal from '../Modal';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    response: null,
    loading: false,
    error: null,
    currentPage: 1,
    totalHits: 1,
    currentImage: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      this.setState({ response: null, loading: true, currentPage: 1 });
      setTimeout(() => {
        this.fetchImages();
      }, 1000);
    }
  }

  fetchImages = () => {
    const { currentPage } = this.state;
    const { request } = this.props;
    const perPage = 12;
    this.setState({ loading: true });
    fetchImages(request, perPage, currentPage)
      .then(response => {
        if (response.hits.length === 0) {
          throw new Error('No photos found');
        }
        this.setState(prevState => ({
          response: prevState.response
            ? [...prevState.response, ...response.hits]
            : response.hits,
          error: null,
          currentPage: prevState.currentPage + 1,
          totalHits: response.totalHits,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleLoadMore = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.fetchImages();
    }, 1000);
  };

  toggleModal = image => {
    this.setState({ currentImage: image });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { loading, response, error, totalHits, currentImage, showModal } =
      this.state;

    return (
      <div>
        {error && <h1>{error}</h1>}
        {loading && <Loader />}
        {!this.props.request && (
          <div className={styled.request}>Введите запрос</div>
        )}
        {response && (
          <div>
            <ul className={styled.ImageGallery}>
              {response.map(item => (
                <ImageGalleryItem
                  key={item.id}
                  item={item}
                  onClick={this.toggleModal}
                />
              ))}
            </ul>
            {response.length < totalHits && (
              <Button onLoadMore={this.handleLoadMore} />
            )}
          </div>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} currentImage={currentImage}></Modal>
        )}
      </div>
    );
  }
}

export default ImageGallery;
