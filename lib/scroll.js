import React from 'react';
import ReactDOM from 'react-dom';

export default class TinyScroll extends React.Component {

  prevent = e => {
    e.stopPropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
  }

  handleNvEnter = (event) => {
    const dom = ReactDOM.findDOMNode(this);
    const { scrollTop, scrollHeight } = dom;
    const delta = -event.deltaY || 0;
    const up = delta > 0;
    const height = parseInt(getComputedStyle(dom, null).getPropertyValue('height'));

    if (!up && -delta > scrollHeight - height - scrollTop) {
      dom.scrollTop = scrollHeight;
      return this.prevent(event);
    } else if (up && delta > scrollTop) {
      dom.scrollTop = 0;
      return this.prevent(event);
    }
  };

  render() {
    const children = React.Children.only(this.props.children);
    return (
      React.cloneElement(children, {
        ...children.props,
        onWheel: this.handleNvEnter
      })
    );
  }

}