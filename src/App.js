import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumIcon from './LayoutComponents/Albums/AlbumIcon/AlbumIcon';
//import UploadBox from './LayoutComponents/Albums/UploadBox/UploadBox';
import DragAndDrop from './LayoutComponents/DragAndDrop/DragAndDrop';

function App() {
  return (
    <div>  
      <AlbumIcon/>
      <DragAndDrop/>
    </div>
  
  );
}

export default App;
