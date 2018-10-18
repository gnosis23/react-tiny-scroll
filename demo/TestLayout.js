import React from 'react';
import TinyScroll from '../lib/scroll';

const styleParent = {
  border: '1px solid #e3e4e5', 
  height: 400, 
  width: 200,
  margin: '',
  overflowY: 'auto'
};
const styleChild = {
  border: '1px solid #0098df', 
  height: 200, 
  overflowY: 'auto'
};

export default class TestLayout extends React.Component {

  render() {
    return (
      <div style={styleParent}>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <TinyScroll>
          <div style={styleChild}>
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
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
      </div>
    );
  }
}