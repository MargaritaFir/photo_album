import React, {useCallback, memo} from 'react';
import './input.scss';

interface IProps {
    value: string;  
    placeholder:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    onFocus: () => void;
};

const Input:React.FC<any> = ( { value, placeholder, onChange, onClear, onFocus } ) => {
    
    const handleChange = useCallback((e) => onChange(e), [onChange]);   

    return (
        <div className='input_container'>
            <input 
                value={value} 
                placeholder={placeholder} 
                onChange={handleChange}   
                autoComplete="off"  
                onFocus={onFocus}
            />
            <span className="clear_input" onClick={onClear} > &times;</span>
        </div>    
    )
}

export default memo(Input);