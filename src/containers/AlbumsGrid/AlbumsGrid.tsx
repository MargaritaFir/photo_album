import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import './albumsGrid.scss';
import List from '../../components/List/List';
import {AlbumsGridContext} from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';

interface IProps {
    userId: string | null;

}

const AlbumsGrid:React.FC<IProps> = ({ userId }) => {

    const albumsGridContext = useContext(AlbumsGridContext);
    const {albums, isLoading, isEmpty, loadAlbums} = albumsGridContext;

    useEffect(() => {
        if(userId) loadAlbums(parseInt(userId))
    }, [loadAlbums, userId ]);

    const renderItemCallback = useCallback(album => <AlbumCard key={album.id} album={album}/>, []);

    return(
        <>
            <div className="albums_grid">
                {
                    (isLoading) ? 
                        <Preloader/> : 
                            (!isEmpty) ? 
                                <List<IAlbum> items={albums} renderItem={renderItemCallback}/> : 
                                    <EmptyContainer message={'User don\'t have albums'}/> 
                }
            </div>    
        </>

    )
}

export default observer(AlbumsGrid);