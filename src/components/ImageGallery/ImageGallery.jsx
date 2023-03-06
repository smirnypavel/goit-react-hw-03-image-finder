import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    response: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      this.setState({ response: null, loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=31868905-6d4cb3c5703ea270b013ab0a6&q=${this.props.request}&image_type=all&orientation=horizontal&per_page=12&page=1`
        )
          .then(resp => resp.json())
          .then(response => {
            if (response.hits.length === 0) {
              throw new Error('No photos found');
            }
            this.setState({ response, error: null });
          })
          .catch(error => this.setState({ error: error.message }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { loading, response, error } = this.state;
    return (
      <div>
        <h1>Gallery</h1>
        {error && <h1>{error}</h1>}
        {loading && <div>Загружаем...</div>}
        {!this.props.request && <div>Введите запрос</div>}

        {response && (
          <ul>
            {response.hits.map(item => (
              <ImageGalleryItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
