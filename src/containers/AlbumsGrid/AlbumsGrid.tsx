import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import List from '../../components/List/List';
import { AlbumsGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';
import useQuery from '../../hooks/useQuery';
import './styles.scss';


const AlbumsGrid:React.FC = () => {
    let query = useQuery();

    const { loadAlbums, albums, isLoading, isEmpty } = useContext(AlbumsGridContext);
    const userId = useMemo( () => query.get('userId'), [query]);

    useEffect(() => {
        if(userId) loadAlbums(userId);     
    }, [userId, loadAlbums]);

    const renderItemCallback = useCallback(album => <AlbumCard key={album.id} album={album} userId={userId}/>, [userId]);

    return(
        <>  
            { isLoading && <div className="preloader_center"><Preloader/></div> } 
            { !isLoading && isEmpty && <EmptyContainer message={'User don\'t have albums'}/> } 

            { 
                !isLoading && 
                !isEmpty && (
                    <div className="albums_grid">
                        <List<IAlbum> items={albums} renderItem={renderItemCallback}/>
                    </div> 
                )}
        </>    
                        

    )
}

export default observer(AlbumsGrid);