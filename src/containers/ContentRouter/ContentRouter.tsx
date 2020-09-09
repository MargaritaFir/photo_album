import React, {useCallback} from 'react';
import  { Route, Switch } from "react-router-dom";
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import PhotosGrid from '../PhotosGrid/PhotosGrid';
import { observer } from 'mobx-react';
import useQuery from '../../hooks/useQuery';


const ContentRouter:React.FC = () => {

    let query = useQuery();

    const renderAlbumCallback = useCallback(() => <AlbumsGrid   userId={query.get("userId")}/>, [query] );
    const renderPhotosCallback = useCallback(() => <PhotosGrid  userId={query.get("userId")} albumId={query.get("albumId")} />, [query] );

    
    return (
        <Switch>            
            <Route path='/albums' render={renderAlbumCallback} />
            <Route path='/photos' render={renderPhotosCallback} />
        </Switch>

    )
}

export default observer(ContentRouter);