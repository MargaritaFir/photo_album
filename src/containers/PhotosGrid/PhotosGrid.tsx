import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import { PhotosGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import List from '../../components/List/List';
import Preloader from '../../components/Preloader/Preloader';
import Button from '../../components/Button/Button';
import './styles.scss';

const PhotosGrid:React.FC = () => {

    const query = useQuery();
    const { isEmpty, isLoading, photos, loadPhotos } = useContext(PhotosGridContext);
    const userId = useMemo( () => query.get('userId'), [query]);
    const albumId = useMemo( () => query.get('albumId'), [query]);

    useEffect(() => {
        if(albumId) loadPhotos(albumId);    
    }, [ albumId, loadPhotos]);

    const renderItemCallBack = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}><span>{photo.title}</span></div> , []);

    return(
        <>
            <div className="button_container">  
                <Link to={`/albums?userId=${userId}`}>
                    <Button  text={'Go back to user\'s albums'}/>
                </Link> 
            </div>

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