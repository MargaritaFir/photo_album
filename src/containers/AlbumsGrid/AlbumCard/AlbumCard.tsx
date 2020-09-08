import React, { memo, useCallback } from 'react';
import  { Link } from "react-router-dom";
import { IAlbum } from '../../../common/interfaces';
import './albumCard.scss';

interface IProps {
    album: IAlbum;
    onSelect: (id:number) => void;
}

const AlbumCard:React.FC<IProps> = ({
    album, 
    onSelect
}) => {

    const onClickCallback = useCallback(() => onSelect(album.id), [album, onSelect])

    return(
        <Link to={`/photos?albumId=${album.id}`}>
            <div className="album" id={`album_${album.id}`} onClick={onClickCallback} >
                <span>{album.title}</span>
            </div>
        </Link>
    )
}

export default memo(AlbumCard);