import { useState } from 'react/cjs/react.development';
import './Board.css';
import Square from './Square';

const Board = () => {

    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''))
    let winningArray = []

    const handleClick = (e) => {
        let num = e.target.id

        if (cells[num] === '') {
            let squares = [...cells];
            if (turn === 'X') {
                squares[num] = 'X'
                setTurn('O')
            } else {
                squares[num] = 'O'
                setTurn('X')
            }

            setCells(squares)
            calculateWinner(squares)

        } else {
            return
        }
    }

    const calculateWinner = (cells) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                //return cells[a];
                setTimeout(() => { alert(`The winner is ${ cells[a] }!!!!`) }, 200)
                winningArray.push(lines[i])
            }
        }
        return null;
    }

    const resetGame = () => {
        setCells(Array(9).fill(''))
        winningArray = []
    }

    return (
        <div className='wrapper'>
            <div className="turn">Turn: {turn}</div>
            <button className="new-game" onClick={resetGame}>New Game</button>
            <div className="board">
                <Square value={0} handleClick={handleClick} content={cells[0]} />
                <Square value={1} handleClick={handleClick} content={cells[1]} />
                <Square value={2} handleClick={handleClick} content={cells[2]} />
                <Square value={3} handleClick={handleClick} content={cells[3]} />
                <Square value={4} handleClick={handleClick} content={cells[4]} />
                <Square value={5} handleClick={handleClick} content={cells[5]} />
                <Square value={6} handleClick={handleClick} content={cells[6]} />
                <Square value={7} handleClick={handleClick} content={cells[7]} />
                <Square value={8} handleClick={handleClick} content={cells[8]} />
            </div>
        </div >

    );
}

export default Board;