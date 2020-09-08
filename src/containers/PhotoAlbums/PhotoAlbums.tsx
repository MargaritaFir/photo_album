import React, { useState, useEffect, useMemo, useCallback } from 'react';
import  SideBar from '../Sidebar/Sidebar';
import { URL, placeholder, notFoundElement } from '../../common/constants';
import UsersApi from '../../common/UsersApi';
import { IUserInfo, IPhoto, IAlbum } from '../../common/interfaces';
import { filterByName } from '../../common/utils/filters';
import Content from '../Content/Content';
import './photoAlbums.scss';


const usersApi = new UsersApi(URL);

const PhotoAlbums:React.FC = () => {

    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ value, setValue ] = useState<string>('');
    const [ albums, setAlbums ] = useState<IAlbum[]>([]);
    const [ photos, setPhotos ] = useState<IPhoto[]>([]);
    const [ selectedUser, setSelectedUser ] = useState<IUserInfo|undefined>();
    const [isLoading, setLoading] = useState<boolean>(true)

    const listItems = useMemo(() => filterByName<IUserInfo>(users, value), [users, value]);

    useEffect(() => {
        const fetchData = async() => {        
        const usersFetch = await usersApi.getUsers();
        setUsers(usersFetch);
        setLoading(false)  
        }
        fetchData();
    }, []);

    const handleSelectAlbums = useCallback(async (id:number) => {
        const albums = await getAlbums(id);
        const user = users.find(user => user.id === id);
        setSelectedUser(user);
        setAlbums(albums);
    }, [users])


    const handleSelectPhotos = useCallback(async (id:number) => {
        const photos = await getPhotos(id);
        setPhotos(photos);
        console.log('id album', id)
    }, [])

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        console.log('value', value)
    }, []);

    const handleClearValue = useCallback( () => {
        setValue('');
    }, []);

    const getAlbums =(userId:number) => usersApi.getAlbums(userId);

    const getPhotos =(albumId:number) => usersApi.getPhotos(albumId);
    
    return (
        <div className="photo_albums">
            <SideBar 
                items={(value) ? listItems : users} 
                notFoundElement={notFoundElement} 
                onSelect={handleSelectAlbums} 
                placeholder={placeholder}
                onClear={handleClearValue}
                value={value}
                onChange={handleChange}
                selectedItemId={(selectedUser) ? selectedUser.id : undefined}
                isLoading={isLoading}
            />
            <Content albums={albums} photos={photos} onSelect={handleSelectPhotos}/>
        </div>
    )
}

export default PhotoAlbums;