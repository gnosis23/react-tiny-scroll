import React from 'react';

export default class TinyScroll extends React.Component {

  componentDidMount() {    
    this.nv.addEventListener("wheel", this.handleNvEnter);
  }

  componentWillUnmount() {    
    this.nv.removeEventListener("wheel", this.handleNvEnter);
  }

  handleNvEnter = (event) => {    
    if (
      (this.scrollTop < 1 && event.deltaY > 0) ||
      ((this.clientHeight + this.scrollTop) === this.scrollHeight && event.deltaY < 0)
    ) {
        event.preventDefault();
    }   
  }

  render() {
    return (
      <div ref={elem => this.nv = elem}>
        {this.props.children}
      </div>
    );
  }

}