import React, { useState } from 'react';
import { Form, Input, Label } from './style';

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>Search:</Label>
      <Input type="text" value={text} onChange={onInputChange} />
    </Form>
  )

};

export default SearchBar;
