<script lang="ts">
	export let data;
	const friends = data.friends;
</script>

<form method="POST" action="?/addFriend" class=" bg-blue-300 flex flex-col gap-4 p-4">
	<input name="name" required />
	<input name="age" type="number" required />
	<select name="interest" required>
		<option value="">Select interest</option>
		<option value="Sport">Sport</option>
		<option value="Music">Music</option>
		<option value="Burek">Burek</option>
	</select>
	<button type="submit">Dodaj prijatelja</button>
</form>

<div class="grid grid-cols-3 p-4 bg-slate-300 gap-4">
	{#each friends as f}
		<div class=" bg-stone-400 rounded-sm">
			<div class=" text-lg font-bold">#{f.id} {f.name} ({f.age})</div>
			<div class="text-sm text-gray-600">{f.interest}</div>
		</div>
	{/each}
</div>
