import React from 'react';
import  { Route, Switch } from "react-router-dom";
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import PhotosGrid from '../PhotosGrid/PhotosGrid';
import { observer } from 'mobx-react';



const ContentRouter:React.FC = () => {

    return (
        <Switch>  
            <Route path='/albums' component={AlbumsGrid} /> 
            <Route path='/photos' component={PhotosGrid} />                    
        </Switch>
    )
}

export default observer(ContentRouter);