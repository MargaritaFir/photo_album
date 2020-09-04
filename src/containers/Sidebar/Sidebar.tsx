import React, { memo } from 'react';
import Input from '../../components/Input/Input';
import NavList from '../../components/NavList/NavList';
import { IItem } from '../../common/interfaces';
import './sidebar.scss';
import { Preloader } from '../../components/Preloader/Preloader';

interface IProps {
    items:IItem[];
    onSelect:(id:number) => void;  
    notFoundElement:string;
    placeholder: string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void; 
    onClear:() => void;
    value:string;
    selectedItemId?: number 
    isLoading: boolean;

};

const SideBar:React.FC<IProps> = ({ 
    items, 
    onSelect, 
    notFoundElement, 
    onChange, 
    onClear, 
    placeholder, 
    value,
    selectedItemId,
    isLoading
}) => {

    return(
        <nav className="sidebar">
            <Input
                onChange={onChange} 
                value={value}
                onClear={onClear}
                placeholder={placeholder}
            />
            <div className="sidebar_list_container">
                {isLoading ? <Preloader/> : <NavList 
                    items={items}  
                    onSelect={onSelect} 
                    notFoundElement={notFoundElement} 
                    selectedItemId={selectedItemId}
                />
                }
                
            </div>
        </nav>       
    )
}

export default memo(SideBar);