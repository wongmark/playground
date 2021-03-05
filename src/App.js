import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
 
  return ( 
  <div>
      <h1>headings are fun</h1>
      <Folder name="Desktop"> 
        <Folder name="logi">
          <File name="file2" />
        </ Folder> 
        <File name="file" />
      </Folder>
      <Folder name="temp"></Folder>
  </div>
  );
}



const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children } = props;

  const handleClick = () => {setIsOpen(!isOpen);}
  const handleEnter = (e) => {
    console.log('hovered');
    e.target.style.color = 'red';
  }
  const handleExit = (e) => {
    e.target.style.color = 'black';
  }
  const direction = isOpen ? 'down' : 'right';

  return (
    <div style={{border: '1px solid pink'}}>
      <span onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleExit}>
      <i className ="folder icon"></i>
      <i className ={`caret ${direction} icon`}></i>
        {name}
      </span>
    {/* <div style = {{border: '1px solid blue', color: 'blue', marginLeft: '17px'}}> */}
    <div>
      { isOpen?props.children: null}
     </div> 
    </div>
  );
};




const File = (props) => {
  
  return (
    <div style = {{marginLeft: '40px'}} >
      {props.name}
    </div>
  );
};

export default App;
