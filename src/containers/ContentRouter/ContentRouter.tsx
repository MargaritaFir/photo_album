import React, {useCallback} from 'react';
import  { Route, Switch, useLocation } from "react-router-dom";
import {IPhoto, IAlbum} from '../../common/interfaces';
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import PhotosGrid from '../PhotosGrid/PhotosGrid';

interface IProps {
    albums: IAlbum[];
    photos:IPhoto[];
    onSelect: (id:number) => void;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const ContentRouter:React.FC<IProps> = ({
    albums,
    photos,
    onSelect 
}) => {

    let query = useQuery();

    const renderAlbumCallback = useCallback(() => <AlbumsGrid albums={albums} onSelect={onSelect}  userId={query.get("userId")}/>, [albums, onSelect, query] );
    const renderPhotosCallback = useCallback(() => <PhotosGrid photos={photos} userId={query.get("userId")} albumId={query.get("albumId")} />, [photos, query] );

    
    return (
        <Switch>            
            <Route path='/albums' render={renderAlbumCallback} />
            <Route path='/photos' render={renderPhotosCallback} />
        </Switch>

    )
}

export default ContentRouter;