import React, { memo, useCallback } from 'react';
import { IPhoto } from '../../common/interfaces';
import './photos.scss';
import List from '../../components/List/List';

interface IProps {
    photos: IPhoto[];
}

const PhotosGrid:React.FC<IProps> = ({photos}) => {

    const handleRenderItem = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}>{photo.title}</div>, [photos]);
    
    return(
        <div className="photos">
            <List items={photos} renderItem={handleRenderItem} />
        </div>
    )
}

export default memo(PhotosGrid);