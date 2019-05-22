import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export default () => {

  const [ text, setText ] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  }

  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
      Meteor.call('messages.add', { text });
      event.preventDefault();
    }
  }

  return <input type="text" value={text} onChange={onChange} onKeyDown={onKeyDown}/>
}