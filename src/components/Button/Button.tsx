import React, {useCallback} from 'react';
import './styles.scss';

interface IProps {
    onClick?:() => void;
    text: string;
}

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