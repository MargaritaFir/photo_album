import React from 'react';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import './styles.scss';
import  { Route, Switch } from "react-router-dom";
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import PhotosGrid from '../PhotosGrid/PhotosGrid';

const message = 'Select a user from the list';

const Content:React.FC = () => {

    return (
        <div className="content">
            <Switch>  
                <Route exact path='/' render={()=>  <EmptyContainer message={message}  /> }  />
                <Route path='/albums' component={AlbumsGrid} /> 
                <Route path='/photos' component={PhotosGrid} />                    
            </Switch>                                
        </div>
    )
}

export default Content;