const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {
	async index(request, response) {
		const { orderBy } = request.params;
		const categories = await CategoryRepository.findAll(orderBy);

		response.json(categories);
	}

	async show(request, response) {
		const { id } = request.body;

		const category = await CategoryRepository.findById(id);

		if (!category) return response.status(404).json({ error: 'Contact not found!' });

		response.json(category);
	}

	async store(request, response) {
		const { name } = request.body;

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const categoryExists = await CategoryRepository.findByName(name);
		if (categoryExists) {
			return response.status(400).json({ error: 'Name is already in use!' });
		}

		const category = await CategoryRepository.create({ name });

		response.json(category);
	}

	async update(request, response) {
		const { id } = request.params;
		const { name } = request.body;

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const categoryExists = await CategoryRepository.findByName(name);

		if (categoryExists && categoryExists.id !== id) {
			return response.status(404).json({ error: 'This name is already in use' });
		}

		const category = await CategoryRepository.update(id, { name });

		response.json(category);
	}

	async delete(request, response) {
		const { id } = request.params;

		await CategoryRepository.delete(id);
		response.sendStatus(204);
	}
}

module.exports = new CategoryController();
