import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import  { Route, Switch } from "react-router-dom";
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import PhotosGrid from '../PhotosGrid/PhotosGrid';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import { observer } from 'mobx-react';
import useQuery from '../../hooks/useQuery';
import { AlbumsGridContext, PhotosGridContext } from '../../context/Context';


const ContentRouter:React.FC = () => {

    let query = useQuery();

    const { loadPhotos } = useContext(PhotosGridContext);
    const { loadAlbums } = useContext(AlbumsGridContext);
    const userId = useMemo( () => query.get('userId'), [query]);
    const albumId = useMemo( () => query.get('albumId'), [query]);
    const message = 'Select a user from the list';

    useEffect(() => {
        if(userId) {
            loadAlbums(userId);
            if(albumId) loadPhotos(albumId);
        } 
        
    }, [userId, loadAlbums, albumId, loadPhotos]);

    const handleClickReturn = useCallback(() => {
        if(albumId) loadPhotos(albumId)
    }, [loadPhotos, albumId]);

    const renderAlbumCallback = useCallback(() => <AlbumsGrid   userId={userId}/>, [userId] );
    const renderPhotosCallback = useCallback(() => <PhotosGrid  userId={userId} onClickReturn={handleClickReturn} />, [userId, handleClickReturn] );
    const renderEmptyContainerCallback = useCallback(() => <EmptyContainer message={message} />, []);
    
    return (
        <Switch>  
            { !userId  && <Route path='/' render={renderEmptyContainerCallback} /> }
            <Route path='/albums' render={renderAlbumCallback} /> 
            <Route path='/photos' render={renderPhotosCallback} />                               
        </Switch>

    )
}

export default observer(ContentRouter);