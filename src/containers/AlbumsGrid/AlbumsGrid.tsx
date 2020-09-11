import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import useQuery from '../../hooks/useQuery';
import { useAlbumsGridContext } from '../../context/Context';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import List from '../../components/List/List';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';
import Header from './Header/Header';
import './styles.scss';

const AlbumsGrid:React.FC = () => {

    const query = useQuery();
    const { loadAlbums, albums, isLoading, isEmpty } = useAlbumsGridContext();
    const userId = useMemo( () => query.get('userId'), [query]);

    useEffect(() => {
        if(userId) loadAlbums(userId);     
    }, [userId, loadAlbums]);

    const renderItemCallback = useCallback(album => <AlbumCard key={album.id} albumId={album.id} userId={album.userId} title={album.title} />, []);

    return(
        <>  
            <Header/>

            { isLoading ? 
                <div className="preloader_center"><Preloader/></div> : 
                    isEmpty ? 
                        <EmptyContainer message={'User don\'t have albums'}/> : 
                            <div className="albums_grid">
                                <List<IAlbum> items={albums} renderItem={renderItemCallback}/>
                            </div> 
            } 

        </>    
    )
}

export default observer(AlbumsGrid);