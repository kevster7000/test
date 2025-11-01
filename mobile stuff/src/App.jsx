import { useState } from 'react';

function App() {
	const [show, setShow] = useState('');

	return (
		<div className='m-3'>
			<button
				type='button'
				className='cursor-help p-4 rounded-full hover:bg-gray-200 focus-visible:bg-gray-200 [transition:background_.225s]'
				onMouseEnter={() => setShow('open')}
				onMouseLeave={() => setShow('close')}
				onFocus={() => setShow('open')}
				onBlur={() => setShow('close')}
			>
				MISS YOU SO
			</button>
			<p className={`border p-4 ${show === 'open' ? 'animate-open' : show === 'close' ? 'animate-close' : 'hidden'}`}>Good morning!</p>
		</div>
	);
}

export default App;
