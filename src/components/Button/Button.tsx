import React, {useCallback} from 'react';

interface IProps {
    onClick:(id:number|string) => void;
    id:number|string;
}

const Button:React.FC<IProps> = ({
    onClick,
    id
}) => {

    const onClickCallback = useCallback(() => onClick(id), [onClick, id])

    return (
        <div className="button_container">
            <button onClick={onClickCallback} ></button>
        </div>
    )
}


export default Button;