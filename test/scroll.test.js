import React from 'react';
import { mount } from 'enzyme';
import TinyScroll from '../lib/scroll'; 

describe('scrooooool', function () {
  it('should scroll outer', function() {
    const parentScroll = jest.fn();
    const component = mount(
      <div className="outer" onWheel={parentScroll} style={{
        height: 400, 
        width: 200,        
        overflowY: 'auto'
      }}>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        {/* <TinyScroll> */}
          <div className="inner" style={{
            height: 150, 
            overflowY: 'auto'
          }}>
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
        {/* </TinyScroll> */}
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
      </div>
    );
    component.find('.inner').at(0).simulate('wheel', { deltaY: 1000 });
    expect(parentScroll).toBeCalled();
  });

  it('shouldn\'t scroll outer', function() {
    const parentScroll = jest.fn();
    const component = mount(
      <div className="outer" onWheel={parentScroll} style={{
        height: 400, 
        width: 200,        
        overflowY: 'auto'
      }}>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <TinyScroll>
          <div className="inner" style={{
            height: 150, 
            overflowY: 'auto'
          }}>
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
      </div>
    );
    component.find('.inner').at(0).simulate('wheel', { deltaY: 1000 });
    expect(parentScroll).not.toBeCalled();
  });
});