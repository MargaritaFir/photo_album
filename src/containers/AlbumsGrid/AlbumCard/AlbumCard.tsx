import React, { memo, useCallback } from 'react';
import { IAlbum } from '../../../common/interfaces';
import './albumCard.scss';

interface IProps {
    album: IAlbum;
    onSelect: (id:number) => void;
}

const AlbumCard:React.FC<IProps> = ({album, onSelect}) => {

    const handleClick = useCallback(() => onSelect(album.id), [album, onSelect])

    return(
        <div className="album" id={`album_${album.id}`} onClick={handleClick} >
            <span>{album.title}</span>
        </div>
    )
}

export default memo(AlbumCard);