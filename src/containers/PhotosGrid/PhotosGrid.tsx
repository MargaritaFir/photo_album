import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import useQuery from '../../hooks/useQuery';
import { usePhotosGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import List from '../../components/List/List';
import Preloader from '../../components/Preloader/Preloader';
import PhotoCard from './PhotoCard/PhotoCard';
import ReturnBackButton from './ReturnBackButton/ReturnBackButton';
import './styles.scss';

const PhotosGrid:React.FC = () => {

    const query = useQuery();
    const { isEmpty, isLoading, photos, loadPhotos } = usePhotosGridContext();
    const userId = useMemo( () => query.get('userId'), [query]);
    const albumId = useMemo( () => query.get('albumId'), [query]);

    useEffect(() => {
        if(albumId) loadPhotos(albumId);    
    }, [ albumId, loadPhotos]);

    const renderItemCallBack = useCallback(photo => <PhotoCard key={photo.id} id={photo.id} title={photo.title} /> , []);

    return(
        <>

            { userId && <ReturnBackButton id={userId}/>}
            { isLoading && <Preloader/> }
            { !isLoading && isEmpty && <EmptyContainer message={'This album don\'t have photos!'}/> } 
            {
                !isLoading && 
                !isEmpty && (
                    <div className="photos">
                        <List items={photos} renderItem={renderItemCallBack} />    
                    </div>
            )}
        </>
        
    )
}

export default observer(PhotosGrid);