import { Component } from 'react';
import { FaSistrix } from 'react-icons/fa6'; //fa6/FaSistrix
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  handlechange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    const { value } = this.state;
    const { handleSubmit, handlechange } = this;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.loupe}>
              <FaSistrix /> {/* fa6/FaSistrix */}
            </span>
          </button>
          <input
            onChange={handlechange}
            type="text"
            autoComplete="off"
            autoFocus
            name="value"
            value={value}
            placeholder="Search images and photos"
            className={css.input}
          />
        </form>
      </header>
    );
  }
}
