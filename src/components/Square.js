import './Square.css';

const Square = (props) => {

    const { value, handleClick, content } = props


    return (

        <div className="square" id={value} onClick={handleClick}>{content}</div>

    );
}

export default Square;