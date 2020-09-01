import React, { memo } from 'react';
import { IAlbums } from '../../common/interfaces';
import Album from './Album/Album';
import './albums.scss';

interface IProps {
    albums: IAlbums[];
    onSelect: (id:number) => void;
}

const Albums:React.FC<IProps> = ({albums, onSelect}) => {
    return(
        <div className="albums_grid">
            {albums.map(album => <Album key={album.id} album={album} onSelect={onSelect}/>)}
        </div>
    )
}

export default memo(Albums);