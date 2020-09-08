import React, { memo, useCallback } from 'react';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import './albumsGrid.scss';
import List from '../../components/List/List';

interface IProps {
    albums: IAlbum[];
    onSelect: (id:number) => void;
    userId: string | null;

}

const AlbumsGrid:React.FC<IProps> = ({
    albums, 
    onSelect, 
    userId 
}) => {

    console.log('userId', userId);

    const renderItemCallback = useCallback(album => <AlbumCard key={album.id} album={album} onSelect={onSelect}/>, [onSelect]);

    return(
        <div className="albums_grid">
            <List<IAlbum> items={albums} renderItem={renderItemCallback}/>
        </div>
    )
}

export default memo(AlbumsGrid);