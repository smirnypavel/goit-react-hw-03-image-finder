// const ImageGalleryItem = ({ response }) => {
//   return (
//     <ul>
//       {response.hits.map(({ previewURL }) => (
//         <li key={previewURL}>{previewURL}</li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGalleryItem;
import styled from './ImageGalleryItem.module.css';
import React from 'react';

const ImageGalleryItem = ({ item }) => (
  <li className={styled.ImageGalleryItem}>
    <img
      src={item.webformatURL}
      alt={item.tags}
      className={styled.ImageGalleryItem_image}
    />
  </li>
);

export default ImageGalleryItem;
