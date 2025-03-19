<script lang="ts">
	export let data;
	const animals = data.animals;
</script>

<form method="POST" action="?/addAnimal" class=" bg-blue-300 flex flex-col gap-4 p-4">
	<input name="name" required />
	<input name="isCute" type="checkbox" />
	<input type="range" min="1" max="10" value="5" name="dangerLevel" />

	<button type="submit">Dodaj žival</button>
</form>

<div class="grid grid-cols-3 p-4 bg-slate-300 gap-4">
	{#each animals as a}
		<div class=" bg-stone-400 rounded-sm">
			<div class=" text-lg font-bold">
				#{a.id} NAME: {a.name}
			</div>
			<div>IS CUTE: ({a.isCute})</div>
			<div class="text-sm text-gray-600">Danger Level {a.dangerLevel}</div>
		</div>
	{/each}
</div>
