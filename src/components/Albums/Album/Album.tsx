import React, { memo, useCallback } from 'react';
import { IAlbums } from '../../../common/interfaces';
import './album.scss';

interface IProps {
    album: IAlbums;
    onSelect: (id:number) => void;
}

const Album:React.FC<IProps> = ({album, onSelect}) => {

    const handleClick = useCallback(() => onSelect(album.id), [album, onSelect])

    return(
        <div className="album" id={`album_${album.id}`} onClick={handleClick} >
            <span>{album.title}</span>
        </div>
    )
}

export default memo(Album);