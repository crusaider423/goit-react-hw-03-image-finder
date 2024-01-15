import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, showModal }) => {
  return (
    <>
      <li className={css.ImageGalleryItem} onClick={()=>showModal(largeImageURL,tags)}>
        <img src={webformatURL} alt={tags}/>
      </li>
    </>
  );
};
