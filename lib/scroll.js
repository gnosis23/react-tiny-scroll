import React from 'react';

export default class TinyScroll extends React.Component {

  render() {
    return (
      <div style={{height: 500, border: '2px solid pink'}}>
        {this.props.children}
      </div>
    );
  }

}