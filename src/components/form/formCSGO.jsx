import React, { useState } from 'react'

import cs2Image from '../../../public/img/cs2.png'
import warzoneImage from '../../../public/img/warzone.png'
import dota2Image from '../../../public/img/dota2.png'
import valorantImage from '../../../public/img/valorant.png'
import apexImage from '../../../public/img/apex.png'
import mobileLegendsImage from '../../../public/img/ML.png'

function FormCSGO() {
	// Список игр с изображениями
	const games = [
		{ name: 'CS 2', unit: 'Эло', image: cs2Image },
		{ name: 'War Zone', unit: 'Рейтинг', image: warzoneImage },
		{ name: 'DOTA 2', unit: 'mmr', image: dota2Image },
		{ name: 'Valorant', unit: 'звание', image: valorantImage },
		{ name: 'Apex', unit: 'ранг', image: apexImage },
		{ name: 'Mobile Legend', unit: 'звёзды', image: mobileLegendsImage },
	]

	// Ранги для игр Apex и Valorant
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
	const [isModalOpen, setIsModalOpen] = useState(false)

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
		// Логика расчета цены
		console.log('Calculating price for range:', range)
		setIsModalOpen(true) // Открываем модалку
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='boost-calculator' id='bust'>
			<div className='boost-calculator__left'>
				<h2 className='boost-calculator__title roboto-bold'>
					Выберите игру и буст
				</h2>
				<p className='boost-calculator__description roboto-light'>
					У каждой игры своя единица буста, в зависимости
					<br /> от игры и количества единиц мы поможем вам
					<br /> расчитать цену.
				</p>

				<div className='boost-calculator__game-selector'>
					<button onClick={prevGame} className='boost-calculator__arrow-button'>
						{'<'}
					</button>
					<span className='boost-calculator__game-name roboto-bold'>
						{games[currentGameIndex].name}
					</span>
					<button onClick={nextGame} className='boost-calculator__arrow-button'>
						{'>'}
					</button>
				</div>

				<div className='boost-calculator__range-selector roboto-light'>
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
							<input
								type='range'
								min='0'
								max='100'
								value={range[activeInput]}
								onChange={handleRangeChange}
								className='boost-calculator__range'
								style={{
									background: `linear-gradient(to right, red 0%, red ${range[activeInput]}%, gray ${range[activeInput]}%, gray 100%)`,
								}}
							/>
						</>
					)}
					<div className='wrapBtn'>
						<button
							onClick={calculatePrice}
							className='boost-calculator__calculate-button roboto-medium'
						>
							Рассчитать цену
						</button>
						{isModalOpen && (
							<div className='modal'>
								<div className='modal-content'>
									<button className='close-button' onClick={closeModal}>
										&times;
									</button>
									<h3 className='model-title'>Расчётная стоимость буста:</h3>
									<h2 className='model-price'>1050 р</h2>
									<form>
										<div className='name_email'>
											<div className='form-group'>
												<label className='form-label'>Имя</label>
												<input
													type='text'
													className='input-field'
													placeholder='Введите ваше имя'
												/>
												<span className='Name'></span>
											</div>
											<div className='form-group'>
												<label className='form-label'>
													Email (обязательно)
												</label>
												<input
													type='email'
													className='input-field'
													placeholder='Email address'
												/>
												<span className='Email'></span>
											</div>
										</div>
										<div className='form-group'>
											<label className='form-label special-m'>
												Ссылка на соц. сеть
												<br />
												(необязательно)
											</label>
											<input
												type='text'
												className='input-field'
												placeholder='vk.com'
											/>
											<span className='Network'></span>
										</div>
										<div className='form-group'>
											<label className='form-label margB'>
												Уточнения для связи:
											</label>
											<textarea
												className='textarea-field'
												placeholder='Комментарии...'
											></textarea>
										</div>
										<button type='submit' className='submit-button'>
											Отправить
										</button>
									</form>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Изображение игры, которое меняется */}
			<div className='boost-calculator__right'>
				<img
					src={games[currentGameIndex].image}
					alt={games[currentGameIndex].name}
					className='boost-calculator__game-image'
				/>
			</div>
		</div>
	)
}

export default FormCSGO
