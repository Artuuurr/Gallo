import React, { useState } from 'react'

function FormCSGO() {
	// Список игр
	const games = [
		{ name: 'CS 2', unit: 'Эло' },
		{ name: 'War Zone', unit: 'Рейтинг' },
		{ name: 'DOTA 2', unit: 'mmr' },
		{ name: 'Valorant', unit: 'звание' },
		{ name: 'Apex', unit: 'ранг' },
		{ name: 'Mobile Legend', unit: 'звёзды' }, // Mobile Legends с системой звёзд
	]

	const apexRanks = [
		'Бронза',
		'Серебро',
		'Золото',
		'Платина',
		'Алмаз',
		'Мастер',
		'Хищник',
	]

	const apexCharacters = [
		'Wraith',
		'Bloodhound',
		'Octane',
		'Lifeline',
		'Pathfinder',
		'Gibraltar',
	]

	const apexAchievements = [
		'Убийца сезона',
		'Легенда арены',
		'Огненный путь',
		'Штормовой охотник',
	]

	const valorantRanks = [
		'Железо',
		'Бронза',
		'Серебро',
		'Золото',
		'Платина',
		'Алмаз',
		'Бессмертие',
		'Радиант',
	]

	const [currentGameIndex, setCurrentGameIndex] = useState(0)
	const [range, setRange] = useState({ from: 0, to: 100 })
	const [activeInput, setActiveInput] = useState('from')
	const [selectedCharacter, setSelectedCharacter] = useState('')
	const [selectedAchievement, setSelectedAchievement] = useState('')

	const nextGame = () => {
		setCurrentGameIndex(prevIndex =>
			prevIndex === games.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevGame = () => {
		setCurrentGameIndex(prevIndex =>
			prevIndex === 0 ? games.length - 1 : prevIndex - 1
		)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setRange(prevRange => ({
			...prevRange,
			[name]: value,
		}))
	}

	const handleRangeChange = e => {
		const value = e.target.value
		setRange(prevRange => ({
			...prevRange,
			[activeInput]: value,
		}))
	}

	const handleFocus = e => {
		setActiveInput(e.target.name)
	}

	const handleCharacterChange = e => {
		setSelectedCharacter(e.target.value)
	}

	const handleAchievementChange = e => {
		setSelectedAchievement(e.target.value)
	}

	const calculatePrice = () => {
		// Функция расчета цены
		console.log('Calculating price for range:', range)
		if (games[currentGameIndex].name === 'Apex') {
			console.log(
				'Персонаж:',
				selectedCharacter,
				'Ачивка:',
				selectedAchievement
			)
		}
	}

	return (
		<div className='boost-calculator'>
			<h2 className='boost-calculator__title'>Выберите игру и буст</h2>
			<p className='boost-calculator__description'>
				У каждой игры своя единица буста, в зависимости
				<br /> от игры и количества единиц мы поможем вам
				<br /> расчитать цену.
			</p>
			<div className='boost-calculator__game-selector'>
				<button onClick={prevGame} className='boost-calculator__arrow-button'>
					{'<'}
				</button>
				<span className='boost-calculator__game-name'>
					{games[currentGameIndex].name}
				</span>
				<button onClick={nextGame} className='boost-calculator__arrow-button'>
					{'>'}
				</button>
			</div>
			<div className='boost-calculator__range-selector'>
				{games[currentGameIndex].name === 'Apex' ? (
					<>
						<p className='boost-calculator__range-label'>Выбрать ранг:</p>
						<div className='boost-calculator__slider-inputs'>
							<select
								name='from'
								value={range.from}
								onChange={handleInputChange}
								className='boost-calculator__input'
							>
								{apexRanks.map((rank, index) => (
									<option key={index} value={index}>
										{rank}
									</option>
								))}
							</select>
							<select
								name='to'
								value={range.to}
								onChange={handleInputChange}
								className='boost-calculator__input'
							>
								{apexRanks.map((rank, index) => (
									<option key={index} value={index}>
										{rank}
									</option>
								))}
							</select>
						</div>

						<p className='boost-calculator__range-label'>
							Выбрать персонажа и ачивку:
						</p>
						<div className='boost-calculator__slider-inputs'>
							<select
								value={selectedCharacter}
								onChange={handleCharacterChange}
								className='boost-calculator__input'
							>
								{apexCharacters.map((character, index) => (
									<option key={index} value={character}>
										{character}
									</option>
								))}
							</select>
							<select
								value={selectedAchievement}
								onChange={handleAchievementChange}
								className='boost-calculator__input'
							>
								{apexAchievements.map((achievement, index) => (
									<option key={index} value={achievement}>
										{achievement}
									</option>
								))}
							</select>
						</div>
					</>
				) : games[currentGameIndex].name === 'Valorant' ? (
					<>
						<p className='boost-calculator__range-label'>Выбрать звание:</p>
						<div className='boost-calculator__slider-inputs'>
							<select
								name='from'
								value={range.from}
								onChange={handleInputChange}
								className='boost-calculator__input'
							>
								{valorantRanks.map((rank, index) => (
									<option key={index} value={index}>
										{rank}
									</option>
								))}
							</select>
							<select
								name='to'
								value={range.to}
								onChange={handleInputChange}
								className='boost-calculator__input'
							>
								{valorantRanks.map((rank, index) => (
									<option key={index} value={index}>
										{rank}
									</option>
								))}
							</select>
						</div>
					</>
				) : games[currentGameIndex].name === 'Mobile Legend' ? (
					<>
						<p className='boost-calculator__range-label'>
							Выбрать количество звёзд:
						</p>
						<div className='boost-calculator__slider-inputs'>
							<input
								type='number'
								name='from'
								value={range.from}
								onChange={handleInputChange}
								onFocus={handleFocus}
								placeholder='От'
								min='0'
								max='100'
								className='boost-calculator__input'
							/>
							<input
								type='number'
								name='to'
								value={range.to}
								onChange={handleInputChange}
								onFocus={handleFocus}
								placeholder='До'
								min='0'
								max='100'
								className='boost-calculator__input'
							/>
						</div>
						<input
							type='range'
							min='0'
							max='100'
							value={range[activeInput]}
							onChange={handleRangeChange}
							className='boost-calculator__range'
						/>
					</>
				) : (
					<>
						<p className='boost-calculator__range-label'>
							Выбрать кол-во по {games[currentGameIndex].unit}:
						</p>
						<div className='boost-calculator__slider-inputs'>
							<input
								type='number'
								name='from'
								value={range.from}
								onChange={handleInputChange}
								onFocus={handleFocus}
								placeholder='От'
								className='boost-calculator__input'
							/>
							<input
								type='number'
								name='to'
								value={range.to}
								onChange={handleInputChange}
								onFocus={handleFocus}
								placeholder='До'
								className='boost-calculator__input'
							/>
						</div>
						<div className='slider-wrapper'>
							<input
								type='range'
								min='0'
								max='100'
								value={range[activeInput]}
								onChange={handleRangeChange}
								className='boost-calculator__range'
							/>
						</div>
					</>
				)}
			</div>
			<div className='wrapBtn'>
				<button
					onClick={calculatePrice}
					className='boost-calculator__calculate-button'
				>
					Рассчитать цену
				</button>
			</div>
		</div>
	)
}

export default FormCSGO
