import React, { memo } from 'react';
import './sidebar.scss';
import Input from '../../components/Input/Input';
import NavList from '../../components/NavList/NavList';
import { IItem } from '../../common/interfaces';

interface IProps {
    items:IItem[];
    onSelect:(id:number) => void;  
    notFoundElement:string;
    placeholder: string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void; 
    onClear:() => void;
    value:string; 

};

const SideBar:React.FC<IProps> = ({ 
    items, 
    onSelect, 
    notFoundElement, 
    onChange, 
    onClear, 
    placeholder, 
    value
}) => {

    return(
        <>
            <div className="sidebar">
                <Input
                    onChange={onChange} 
                    value={value}
                    onClear={onClear}
                    placeholder={placeholder}
                />
                <div className="sidebar_items">
                    <NavList 
                        items={items}  
                        onSelect={onSelect} 
                        notFoundElement={notFoundElement} 
                    />
                </div>
            </div>
        </>       
    )
}

export default memo(SideBar);