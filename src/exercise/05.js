// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names...
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({className = '', style, ...otherProps}) => {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const Box2 = ({className = '', style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

const smallBox2 = (
  <Box2 size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box 2
  </Box2>
)
const mediumBox2 = (
  <Box2 size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box 2
  </Box2>
)
const largeBox2 = (
  <Box2 size="large" style={{backgroundColor: 'orange'}}>
    large orange box 2
  </Box2>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>sizelessbox</Box>
      {smallBox2}
      {mediumBox2}
      {largeBox2}
      <Box>sizelessbox2</Box>
    </div>
  )
}

export default App
