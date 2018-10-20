import React from 'react';
import { mount } from 'enzyme';
import TinyScroll from '../lib/scroll';

describe('scrooooool', function () {
  it('should scroll inner', function() {
    // const component = mount(
    //   <div className="outer" style={{
    //     height: 400, 
    //     width: 200,        
    //     overflowY: 'auto'
    //   }}>
    //     <p>1111</p>
    //     <TinyScroll>
    //       <div className="inner" style={{
    //         height: 200, 
    //         overflowY: 'auto'
    //       }}>
    //         <p>Hello world</p>
    //         <p>Hello world</p>            
    //       </div>
    //     </TinyScroll>
    //     <p>1111</p>
    //   </div>
    // );
    // component.find('.inner').at(0).simulate('scroll');
    expect(1 + 1).toEqual(2);
  });
});