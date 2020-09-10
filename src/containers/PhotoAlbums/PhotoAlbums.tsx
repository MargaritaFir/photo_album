import React, { useContext, useEffect }  from 'react';
import  SideBar from '../Sidebar/Sidebar';
import { placeholder, notFoundElement } from '../../common/constants';
import Content from '../Content/Content';
import { SideBarContext } from '../../context/Context';
import './photoAlbums.scss';
import { observer } from 'mobx-react';



const PhotoAlbums:React.FC = () => {

    const { loadUsers } = useContext(SideBarContext);

    useEffect(() => { 
        loadUsers(); 
    }, [loadUsers]);

    return (
        <div className="photo_albums">
            <SideBar 
                notFoundElement={notFoundElement} 
                placeholder={placeholder}
            />
            <Content/>
        </div>
    )
}

export default observer(PhotoAlbums);