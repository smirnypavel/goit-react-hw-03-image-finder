import { Component } from 'react';
import styled from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item.largeImageURL);
  };

  render() {
    const { item } = this.props;

    return (
      <li className={styled.ImageGalleryItem}>
        <img
          src={item.webformatURL}
          alt={item.tags}
          className={styled.ImageGalleryItemImage}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
