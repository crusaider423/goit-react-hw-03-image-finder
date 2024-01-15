import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components';

export const ImageGallery = ({ posts, showModal }) => {
  const gallery = posts.map(({ id, webformatURL, largeImageURL, tags }) => (
    <ImageGalleryItem
      key={id}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
      tags={tags}
      showModal={showModal}
    />
  ));
  return <ul className={css.ImageGallery}>{gallery}</ul>;
};
