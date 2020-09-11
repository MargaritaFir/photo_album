import React, { useContext, useEffect, useMemo } from 'react';
import useQuery from '../../hooks/useQuery';
import { observer } from 'mobx-react';
import { SideBarContext } from '../../context/Context';
import Input from '../../components/Input/Input';
import UsersList from '../../components/UsersList/UsersList';
import Preloader from '../../components/Preloader/Preloader';
import NotFoundItem from '../../components/NotFoundItem/NotFoundItem';
import './styles.scss';

interface IProps {
    notFoundElement:string;
    placeholder: string;
};

const SideBar:React.FC<IProps> = ({ 
    notFoundElement,
    placeholder, 
}) => {

    const query = useQuery();
    const { filterValue, setFilterValue, users, selectUser, selectedUserId, setClearValue, isLoading, isEmpty } = useContext(SideBarContext);
    const userId = useMemo(() => query.get('userId'), [query]);

    useEffect(() => { 
        if(userId && !isLoading) selectUser(parseInt(userId));
    }, [selectUser, userId, isLoading]);

    return(
        <nav className="sidebar">
            <Input
                onChange={setFilterValue} 
                value={filterValue}
                onClear={setClearValue}
                placeholder={placeholder}
            />
            <div className="sidebar_list_container">
                { 
                    isLoading ?  
                        <Preloader/> : 
                            isEmpty ? 
                                <NotFoundItem notFoundElement={notFoundElement}/> : 
                                    <UsersList items={users} onSelect={selectUser} selectedItemId={selectedUserId} />
                }   
            </div>
        </nav>       
    )
}

export default observer(SideBar);