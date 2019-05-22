import React, { Component, useState } from 'react';

export default () => {
  const [ counter, setCounter ] = useState(0);
  return (
    <button onClick={() => setCounter(c => c + 1)}>
      {counter} Mal geklickt
    </button>
  );
}
