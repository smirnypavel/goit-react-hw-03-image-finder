import { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from './Searchbar.module.css';
import { toast } from 'react-toastify';

export default class searchBar extends Component {
  state = {
    request: '',
  };
  handleRequestChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.request.trim() === '') {
      return toast.error('Введите запрос!');
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };
  render() {
    return (
      <header className={styled.Searchbar}>
        <form className={styled.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={styled.SearchForm_button}>
            <span>Search</span>
          </button>
          <input
            className={styled.SearchForm_input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search..."
            name="request"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </form>
      </header>
    );
  }
}

//export default searchBar;
