import React, {useCallback} from 'react';

interface IProps {
    onClick:(id: number) => void;
    id: number;
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