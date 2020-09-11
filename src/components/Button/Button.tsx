import React, { useCallback } from 'react';
import './styles.scss';

interface IProps {
    onClick?:() => void;
    text: string; // children: React.ReactNode
}

const Button:React.FC<IProps> = ({ onClick, text}) => {
    
    const onClickCallback = useCallback(() => {
        if(onClick) onClick()
    }, [onClick])

    return <button onClick={onClickCallback}>{text}</button>
}

export default Button;