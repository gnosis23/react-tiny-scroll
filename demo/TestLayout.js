import React from 'react';
import TinyScroll from '../lib/scroll';

const styleParent = {
  border: '1px solid #e3e4e5', 
  height: 400, 
  width: '100%',
  margin: '',
  overflowY: 'auto'
};
const styleChild = {
  border: '1px solid #0098df', 
  height: 150, 
  overflowY: 'auto'
};

export default class TestLayout extends React.Component {
  parentScroll = (e) => {
    // console.log('parent scroll');
  };

  childScroll = (e) => {
    // console.log('child scroll');
  };

  render() {
    return (
      <div style={styleParent} onScroll={this.parentScroll}>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <TinyScroll>
          <div style={styleChild} onScroll={this.childScroll}>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
          </div>
        </TinyScroll>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>

      </div>
    );
  }
}