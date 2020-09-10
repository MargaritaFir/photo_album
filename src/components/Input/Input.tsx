import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import './styles.scss';

interface IProps {
    value: string;  
    placeholder:string;
    onChange:(value: string) => void;
    onClear: () => void;
};

const Input:React.FC<IProps> = ({ 
    value, 
    placeholder, 
    onChange, 
    onClear 
}) => {
    
    const onChangeCallback = useCallback((e) => onChange(e.target.value), [onChange]);   

    return (
        <div className='input_container'>
            <input value={value} placeholder={placeholder} onChange={onChangeCallback}  autoComplete="off" />
            <span className="clear_input" onClick={onClear} > &times;</span>
        </div>    
    )
}

export default observer(Input);