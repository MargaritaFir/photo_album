import React, { memo } from 'react';
import { IPhotos } from '../../common/interfaces';
import './photos.scss';

interface IProps {
    photos: IPhotos[];
}

const PhotosGrid:React.FC<IProps> = ({photos}) => {
    return(
        <div className="photos">
            {photos.map(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}>{photo.title}</div>)}
        </div>
    )
}

export default memo(PhotosGrid);