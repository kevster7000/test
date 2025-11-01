import { useState } from 'react';

function App() {
	const [show, setShow] = useState('');
	const [show2, setShow2] = useState('');
	const [show3, setShow3] = useState('');
	const [show4, setShow4] = useState('');

	return (
		<div>
			<div className='m-3'>
				<button
					type='button'
					className='cursor-help p-4 rounded-full hover:bg-gray-200 focus-visible:bg-gray-200 [transition:background_.225s]'
					onMouseEnter={() => setShow('open')}
					onMouseLeave={() => setShow('close')}
					onFocus={() => setShow('open')}
					onBlur={() => setShow('close')}
				>
					Mouse + Focus
				</button>
				<p className={`border p-4 ${show === 'open' ? 'opacity-100' : show === 'close' ? 'opacity-0' : 'opacity-0'}`}>Good morning!</p>
			</div>
			<div className='m-3'>
				<button
					type='button'
					className='cursor-help p-4 rounded-full hover:bg-gray-200 focus-visible:bg-gray-200 [transition:background_.225s]'
					onMouseEnter={() => setShow2('open')}
					onMouseLeave={() => setShow2('close')}
				>
					Mouse
				</button>
				<p className={`border p-4 ${show2 === 'open' ? 'opacity-100' : show2 === 'close' ? 'opacity-0' : 'opacity-0'}`}>Good morning!</p>
			</div>
			<div className='m-3'>
				<button
					type='button'
					className='cursor-help p-4 rounded-full hover:bg-gray-200 focus-visible:bg-gray-200 [transition:background_.225s]'
					onPointerEnter={() => setShow3('open')}
					onPointerLeave={() => setShow3('close')}
					onFocus={() => setShow3('open')}
					onBlur={() => setShow3('close')}
				>
					Pointer + Focus
				</button>
				<p className={`border p-4 ${show3 === 'open' ? 'opacity-100' : show3 === 'close' ? 'opacity-0' : 'opacity-0'}`}>Good morning!</p>
			</div>
			<div className='m-3'>
				<button
					type='button'
					className='cursor-help p-4 rounded-full hover:bg-gray-200 focus-visible:bg-gray-200 [transition:background_.225s]'
					onPointerEnter={() => setShow4('open')}
					onPointerLeave={() => setShow4('close')}
				>
					Pointer
				</button>
				<p className={`border p-4 ${show4 === 'open' ? 'opacity-100' : show4 === 'close' ? 'opacity-0' : 'opacity-0'}`}>Good morning!</p>
			</div>
		</div>
	);
}

export default App;
