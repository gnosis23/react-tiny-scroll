# react-tiny-scroll

<p>
  <img src="https://img.shields.io/npm/v/react-tiny-scroll.svg">
  <img src="https://img.shields.io/npm/l/react-tiny-scroll.svg" alt="License">
</p>

A simple React component that prevents scrolling of parent element when inner element scroll position reaches top/bottom

## Installation
Using npm:
```
$ npm install --save react-tiny-scroll
```

## Usage
```js
import { TinyScroll } from 'react-tiny-scroll'

render() {
  return (
    <TinyScroll>
      <span>Contents</span>
    </TinyScroll>
  );
}
```
