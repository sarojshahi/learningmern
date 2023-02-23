import React from 'react'

const Header = (props) => {
  console.log("Data Shows Here:", props);
  return (
    <div>
      <h1>This is Header</h1>
      {props}
    </div>
    
  )
}

export default Header