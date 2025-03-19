import db from '../lib/db';

export const actions = {
	addFriend: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const age = form.get('age');
		const interest = form.get('interest');

		// Dodaj novega prijatelja v Bazo
		await db.friend.create({
			data: {
				name: name,
				age: parseInt(age),
				interest: interest
			}
		});
	}
};

export async function load() {
	// SELECT * FROM friend
	const f = await db.friend.findMany();

	return {
		friends: f,
		najStevilo: 23
	};
}
