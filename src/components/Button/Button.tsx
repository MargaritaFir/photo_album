import React, {useCallback} from 'react';
import './styles.scss';

interface IProps {
    onClick:(id:number|string) => void;
    id:number|string;
    text: React.ReactNode;
}

const Button:React.FC<IProps> = ({
    onClick,
    id,
    text
}) => {

    const onClickCallback = useCallback(() => onClick(id), [onClick, id])

    return (
        <div>
            <button onClick={onClickCallback}>{text}</button>
        </div>
    )
}


export default Button;