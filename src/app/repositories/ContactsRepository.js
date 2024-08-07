const { v4 } = require('uuid');

const contacts = [
	{
		id: v4(),
		name: 'Tiago',
		email: 'tiago@mail.com',
		phone: '123123123',
		category_id: v4(),
	},
	{
		id: v4(),
		name: 'Mateus',
		email: 'mateus@mail.com',
		phone: '123123123',
		category_id: v4(),
	},
];

class ContactsRepository {
	findAll() {
		return new Promise((resolve) => { resolve(contacts); });
	}
}

module.exports = new ContactsRepository();
