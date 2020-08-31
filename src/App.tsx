import React, { useState, useEffect } from 'react';
import { SideBar } from './containers/Sidebar/Sidebar';
import {URL} from './common/constants';
import UsersApi from './common/UsersApi';
import { IUserInfo } from './common/interfaces';

const usersApi = new UsersApi(URL);

function App() {

  const [ users, setUsers ] = useState<IUserInfo[]>([]);

  useEffect(() => {
    const fetchData = async() => {        
        const usersFetch = await usersApi.getUsers();
        setUsers(usersFetch);  
    }

    fetchData();

}, []);


  return (
    <SideBar users={users}/>
  );
}

export default App;
