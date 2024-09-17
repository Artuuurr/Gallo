import React, { useState } from 'react'
import './admin-compon/admin.css'

// Изображения игр
import cs2Image from '../../../public/img/cs2.png'
import warzoneImage from '../../../public/img/warzone.png'
import dota2Image from '../../../public/img/dota2.png'
import valorantImage from '../../../public/img/valorant.png'
import apexImage from '../../../public/img/apex.png'
import mobileLegendsImage from '../../../public/img/ML.png'

// Пробные данные клиентов
const clientsData = [
	{
		id: 1,
		game: 'CS 2',
		price: '2000 р',
		name: 'Иван Иванов',
		email: 'ivanov@mail.com',
		vk: 'vk.com/ivanov',
		details: 'Уточнение 1',
		rankFrom: '1500',
		rankTo: '2000',
	},
	{
		id: 2,
		game: 'DOTA 2',
		price: '1500 р',
		name: 'Петр Петров',
		email: 'petrov@mail.com',
		vk: 'vk.com/petrov',
		details: 'Уточнение 2',
		rankFrom: 'Guardian',
		rankTo: 'Legend',
	},
	{
		id: 3,
		game: 'Valorant',
		price: '1800 р',
		name: 'Мария Смирнова',
		email: 'smirnova@mail.com',
		vk: 'vk.com/smirnova',
		details: 'Нужна поддержка в матче',
		rankFrom: 'Silver',
		rankTo: 'Gold',
	},
	{
		id: 4,
		game: 'Apex',
		price: '2200 р',
		name: 'Алексей Кузнецов',
		email: 'kuznetsov@mail.com',
		vk: 'vk.com/kuznetsov',
		details: 'Повысить ранг до Мастер',
		rankFrom: 'Gold',
		rankTo: 'Master',
	},
	{
		id: 5,
		game: 'War Zone',
		price: '1700 р',
		name: 'Сергей Лебедев',
		email: 'lebedev@mail.com',
		vk: 'vk.com/lebedev',
		details: 'Уточнение по стратегическим аспектам',
		rankFrom: 'Bronze',
		rankTo: 'Silver',
	},
	{
		id: 6,
		game: 'Mobile Legend',
		price: '1600 р',
		name: 'Анна Петрова',
		email: 'petrova@mail.com',
		vk: 'vk.com/petrova',
		details: 'Увеличение звёзд до 2000',
		rankFrom: '1500',
		rankTo: '2000',
	},
	{
		id: 7,
		game: 'CS 2',
		price: '2100 р',
		name: 'Дмитрий Соколов',
		email: 'sokolov@mail.com',
		vk: 'vk.com/sokolov',
		details: 'Уточнение по оружейной подборке',
		rankFrom: '1800',
		rankTo: '2200',
	},
	{
		id: 8,
		game: 'DOTA 2',
		price: '1900 р',
		name: 'Елена Киселева',
		email: 'kiseleva@mail.com',
		vk: 'vk.com/kiseleva',
		details: 'Уточнение по герою',
		rankFrom: 'Immortal',
		rankTo: 'Divine',
	},
	{
		id: 9,
		game: 'Valorant',
		price: '1750 р',
		name: 'Николай Васильев',
		email: 'vasilev@mail.com',
		vk: 'vk.com/vasilev',
		details: 'Повышение ранга за 2 недели',
		rankFrom: 'Gold',
		rankTo: 'Platinum',
	},
	{
		id: 10,
		game: 'Apex',
		price: '2300 р',
		name: 'Ольга Морозова',
		email: 'morozova@mail.com',
		vk: 'vk.com/morozova',
		details: 'Уточнение по персонажу',
		rankFrom: 'Diamond',
		rankTo: 'Master',
	},
]

// Список игр
const games = [
	{ name: 'CS 2', image: cs2Image },
	{ name: 'War Zone', image: warzoneImage },
	{ name: 'DOTA 2', image: dota2Image },
	{ name: 'Valorant', image: valorantImage },
	{ name: 'Apex', image: apexImage },
	{ name: 'Mobile Legend', image: mobileLegendsImage },
]

function Admin() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedGame, setSelectedGame] = useState(null)

	// Обработчик поиска
	const handleSearchChange = e => {
		setSearchQuery(e.target.value)
	}

	// Фильтрация клиентов по поисковому запросу и выбранной игре
	const filteredClients = clientsData.filter(client => {
		const matchesSearch =
			client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
			client.vk.toLowerCase().includes(searchQuery.toLowerCase()) ||
			client.price.toLowerCase().includes(searchQuery.toLowerCase())

		const matchesGame = selectedGame ? client.game === selectedGame : true

		return matchesSearch && matchesGame
	})

	return (
		<div className='admin-panel'>
			{/* Поисковая строка */}
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Поиск по почте, игре, имени или ВК'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</div>

			<div className='content'>
				{/* Панель фильтров игр */}
				<div className='filter-panel'>
					<h3>Фильтр по играм</h3>
					<ul>
						{games.map((game, index) => (
							<li key={index}>
								<button onClick={() => setSelectedGame(game.name)}>
									{game.name}
								</button>
							</li>
						))}
						<li>
							<button onClick={() => setSelectedGame(null)}>Все игры</button>
						</li>
					</ul>
				</div>

				{/* Список клиентов */}
				<div className='client-list'>
					<table>
						<thead>
							<tr>
								<th>Игра</th>
								<th>Цена</th>
								<th>Имя</th>
								<th>Почта</th>
								<th>ВК</th>
								<th>Доп. информация</th>
								<th>От ранга</th>
								<th>До ранга</th>
							</tr>
						</thead>
						<tbody>
							{filteredClients.map(client => (
								<tr key={client.id}>
									<td>{client.game}</td>
									<td>{client.price}</td>
									<td>{client.name}</td>
									<td>{client.email}</td>
									<td>
										<a
											href={`https://${client.vk}`}
											target='_blank'
											rel='noreferrer'
										>
											{client.vk}
										</a>
									</td>
									<td>{client.details}</td>
									<td>{client.rankFrom}</td>
									<td>{client.rankTo}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Admin
