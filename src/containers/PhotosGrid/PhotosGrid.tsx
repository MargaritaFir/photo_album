import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import './photosGrid.scss';
import List from '../../components/List/List';
import { AlbumsGridContext, PhotosGridContext } from '../../context/Context';

interface IProps {
    userId: string | null;
    albumId: string | null;
}

const PhotosGrid:React.FC<IProps> = ({
    userId, 
    albumId
}) => {

    const albumsContext = useContext(AlbumsGridContext);
    const photosContext = useContext(PhotosGridContext);


    useEffect(() => {
        if(albumId) photosContext.loadPhotos(parseInt(albumId));
    }, [albumId, photosContext])


    console.log('userId', userId);
    console.log('albumId', albumId);

    const renderItemCallBack = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}><span>{photo.title}</span></div> , []);
    
    return(
        <div className="photos">
            <List items={photosContext.photos} renderItem={renderItemCallBack} />
        </div>
    )
}

export default observer(PhotosGrid);