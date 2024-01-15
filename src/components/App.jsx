import { Component } from 'react';
import css from './App.module.css';
import { Audio } from 'react-loader-spinner';
import { Searchbar, ImageGallery, getFetch, Button, Modal } from '.';

<Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
/>;

export class App extends Component {
  state = {
    search: '',
    posts: [],
    error: null,
    loading: false,
    page: 1,
    modalOpen: false,
    largeImage: '',
    alt: '',
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { hits } = await getFetch();
      this.setState({ posts: hits?.length ? hits : [] });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.setState({ loading: true });
      try {
        const { hits, totalHits } = await getFetch(search, page);
        this.setState(({ posts }) => ({
          posts: hits?.length ? [...posts, ...hits] : posts,
          load: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  submitValue = search => {
    this.setState({ search, page: 1, posts: [] });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = (largeImageURL, tags) => {
    console.log(tags);
    this.setState({ modalOpen: true, largeImage: largeImageURL, alt: tags });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { submitValue, loadMore, showModal, closeModal } = this;
    const { posts, loading, error, modalOpen, largeImage, alt, load } =
      this.state;
    return (
      <>
        <div className={css.app}>
          <Searchbar onSubmit={submitValue} />
          {error && <p className={css.error}>{error}</p>}
          {loading ? (
            <Audio />
          ) : (
            <ImageGallery posts={posts} showModal={showModal} />
          )}
          {load && !loading && (
            <Button title={'Load more'} onClick={loadMore} />
          )}
        </div>
        {modalOpen && (
          <Modal close={closeModal}>
            <img src={largeImage} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}
