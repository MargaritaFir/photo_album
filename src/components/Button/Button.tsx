import React, { useCallback } from 'react';
import './styles.scss';

interface IProps {
    onClick?:() => void;
    text: string;
}

// Я сделала просто пустую кнопку, которую можно переиспользовать, которая может что-то делать при клике, 
// но сейчас она обёрнута в Link, поэтому onClick не передаётся

const Button:React.FC<IProps> = ({
    onClick,
    text
}) => {

    const onClickCallback = useCallback(() => {
        if(onClick) onClick()
    }, [onClick])

    return (
        <div>
            <button onClick={onClickCallback}>{text}</button>
        </div>
    )
}


export default Button;