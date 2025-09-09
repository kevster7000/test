import { useState, useRef } from 'react';

const winningRows = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const X = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' className='stroke-red-500'>
		<path d='M 15 15 L 85 85 M 85 15 L 15 85' strokeWidth='20' strokeLinecap='round' />
	</svg>
);

const O = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' className='stroke-blue-500'>
		<circle r='40' cx='50%' cy='50%' fill='transparent' strokeWidth='20' />
	</svg>
);

function Square({ index, value, gameStatus, handleClick }) {
	return (
		<button
			className={`p-[10px] cursor-pointer aspect-square size-full border-neutral-500 ${
				!value && 'hover:bg-neutral-200/50 focus-visible:bg-neutral-200/50'
			} ${(index + 1) % 3 && 'border-r-1'} ${index >= 3 && index <= 5 && 'border-y-1'} ${
				gameStatus.current.winningRow.includes(index) && gameStatus.current.result === 'x' && 'bg-red-200/90'
			}
			} ${gameStatus.current.winningRow.includes(index) && gameStatus.current.result === 'o' && 'bg-blue-200/90'}
            `}
			tabIndex={gameStatus.current.result || value ? -1 : 0}
			onClick={handleClick}
		>
			{value === 'x' ? X : value === 'o' && O}
		</button>
	);
}

export default function App() {
	const [board, setBoard] = useState(Array(9).fill(''));
	const [player, setPlayer] = useState('x');
	const [player1Score, setPlayer1Score] = useState(0);
	const [player2Score, setPlayer2Score] = useState(0);
	const gameStatus = useRef({ result: '', winningRow: [] });

	function handleClick(i) {
		if (board[i] || gameStatus.current.result) return;
		const newBoard = [...board];
		newBoard[i] = player;
		setBoard(newBoard);
		checkResult(newBoard);
		if (gameStatus.current.result === 'x') setPlayer1Score(player1Score + 1);
		else if (gameStatus.current.result === 'o') setPlayer2Score(player2Score + 1);
		else setPlayer(player === 'x' ? 'o' : 'x');
	}

	function handleNewGame() {
		if (gameStatus.current.result !== 'cat') setPlayer(player === 'x' ? 'o' : 'x');
		gameStatus.current = { result: '', winningRow: [] };
		setBoard(Array(9).fill(''));
	}

	function checkResult(board) {
		if (!board.includes('')) gameStatus.current.result = 'cat';
		for (let row of winningRows) {
			if (board[row[0]] && board[row[0]] === board[row[1]] && board[row[1]] === board[row[2]]) {
				gameStatus.current.result = board[row[0]];
				gameStatus.current.winningRow = row;
				break;
			}
		}
	}

	return (
		<main className='absolute left-1/2 -translate-x-1/2'>
			<h1 className='text-center text-5xl pb-4 pt-8 text-nowrap px-[2.5vw]'>tic-tac-toe</h1>
			<p
				className={`text-center text-2xl py-4 transition-colors ${
					gameStatus.current.result === 'cat' ? 'text-neutral-600' : player === 'x' ? 'text-red-600' : 'text-blue-600'
				}`}
			>
				{!gameStatus.current.result && `Player ${player === 'x' ? '1' : '2'}'s Move`}
				{gameStatus.current.result === 'x' ? 'Player 1 Wins!' : gameStatus.current.result === 'o' && 'Player 2 Wins!'}
				{gameStatus.current.result === 'cat' && 'Cat!'}
			</p>
			<div className='flex justify-between text-lg py-4 gap-10'>
				<p className='text-red-600'>
					Player 1: <strong>{player1Score}</strong>
				</p>
				<p className='text-blue-600'>
					Player 2: <strong>{player2Score}</strong>
				</p>
			</div>
			<div className='grid grid-cols-3 relative'>
				{gameStatus.current.result && (
					<div className='absolute size-full grid content-center justify-center bg-neutral-200/50 text-lg '>
						<button
							type='button'
							className='border-1 w-fit px-2 py-1 cursor-pointer active:translate-y-[2%] bg-neutral-50 active:bg-neutral-200'
							onClick={handleNewGame}
						>
							New Game
						</button>
					</div>
				)}
				{board.map((square, i) => (
					<Square key={i} index={i} value={square} gameStatus={gameStatus} handleClick={() => handleClick(i)} />
				))}
			</div>
		</main>
	);
}
