import React from 'react';
import PhotoAlbums from './containers/PhotoAlbums/PhotoAlbums';
import  { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <PhotoAlbums />
        </BrowserRouter> 
    );
}

export default App;
