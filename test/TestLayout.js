import React from 'react';
import TinyScroll from '../lib/scroll';

export default class TestLayout extends React.Component {

  render() {
    return (
      <div>
        <TinyScroll>
          <p>Hello world</p>
        </TinyScroll>
      </div>
    );
  }
}