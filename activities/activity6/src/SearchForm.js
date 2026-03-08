import React, { useState } from 'react';

const SearchForm = (props) => {
  const [inputText, setInputText] = useState('');

  const handleChangeInput = (event) => {
    setInputText(event.target.value);
    console.log('Input changed:', event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputText);
    console.log('Search submitted:', inputText);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search albums..."
            value={inputText}
            onChange={handleChangeInput}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;