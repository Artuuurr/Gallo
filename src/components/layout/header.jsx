import React from 'react'

function Header() {
	return (
		<>
			<header>
				<div className='wrapHead'>
					<div className='wrapLogo'></div>
					<div>
						<span className='nameSite'>GALLO</span>
					</div>
					<button type='button' className='headBtn'>
						Купить буст
					</button>
				</div>
			</header>
		</>
	)
}

export default Header
