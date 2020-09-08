import React, { memo, useCallback } from 'react';
import { IPhoto } from '../../common/interfaces';
import './photosGrid.scss';
import List from '../../components/List/List';

interface IProps {
    photos: IPhoto[];
    userId: string | null;
    albumId: string | null;
}

const PhotosGrid:React.FC<IProps> = ({
    photos, 
    userId, 
    albumId
}) => {

    console.log('userId', userId);
    console.log('albumId', albumId);

    const renderItemCallBack = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}><span>{photo.title}</span></div> , []);
    
    return(
        <div className="photos">
            <List items={photos} renderItem={renderItemCallBack} />
        </div>
    )
}

export default memo(PhotosGrid);