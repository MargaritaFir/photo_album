import React, { useEffect }  from 'react';
import { observer } from 'mobx-react';
import { useSideBarContext } from '../../context/Context';
import Content from '../Content/Content';
import  SideBar from '../Sidebar/Sidebar';
import './styles.scss';

const PhotoAlbums:React.FC = () => {

    const { loadUsers } = useSideBarContext();

    useEffect(() => { 
        loadUsers(); 
    }, [loadUsers]);

    return (
        <div className="photo_albums">
            <SideBar />
            <Content/>
        </div>
    )
}

export default observer(PhotoAlbums);