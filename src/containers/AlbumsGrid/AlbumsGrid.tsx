import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import List from '../../components/List/List';
import { AlbumsGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';
import './styles.scss';

interface IProps {
    userId: string 
}

const AlbumsGrid:React.FC<IProps> = ({ userId }) => {

    const { albums, isLoading, isEmpty } = useContext(AlbumsGridContext);


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