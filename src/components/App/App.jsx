import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
const [galleryList, setGalleryList] = useState('');

useEffect(()=>{

  getGallery();
}, [])


  const getGallery = ()=>{

    axios.get('/gallery')
    .then(response=>{
      setGalleryList(response.data);
      console.log('GET successful: ', galleryList);
    })
    .catch(error=>{
      console.log('Error in GET: ', error);
    })

  }







    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          galleryList={galleryList}
        
        />


        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
