import React, { useCallback, memo } from 'react';
import './input.scss';

interface IProps {
    value: string;  
    placeholder:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
};

const Input:React.FC<IProps> = ({ 
    value, 
    placeholder, 
    onChange, 
    onClear 
}) => {
    
    const handleChange = useCallback((e) => onChange(e), [onChange]);   

    return (
        <div className='input_container'>
            <input value={value} placeholder={placeholder} onChange={handleChange}  autoComplete="off" />
            <span className="clear_input" onClick={onClear} > &times;</span>
        </div>    
    )
}

export default memo(Input);