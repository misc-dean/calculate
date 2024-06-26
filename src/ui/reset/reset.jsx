import React from 'react';
import './reset.css';

export default function Reset({ onClick }) {
	return (
		<div onClick={onClick} className='reset'>
			<svg className='resetImage' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
				<defs fill='#D3D3D3' />
				<path
					d='m54,32c0,12.15-9.85,22-22,22s-22-9.85-22-22h6c0,8.84,7.16,16,16,16s16-7.16,16-16-7.16-16-16-16h-2.26l5.76,5.76-4.24,4.24-13-13L31.26,0l4.24,4.24-5.76,5.76h2.26c12.15,0,22,9.85,22,22Z'
					fill='rgb(85, 85, 85)'
				/>
			</svg>
			<span>Reset</span>
		</div>
	);
}
