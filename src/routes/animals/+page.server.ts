import db from '$lib/db';

export const actions = {
	addAnimal: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const isCute = form.get('isCute');
		const dangerLevel = form.get('dangerLevel');
		console.log(name, isCute, dangerLevel);
		await db.animal.create({
			data: {
				name: name,
				isCute: isCute == 'on',
				dangerLevel: parseInt(dangerLevel)
			}
		});
	}
};

export async function load() {
	const animals = await db.animal.findMany();

	return { animals };
}
