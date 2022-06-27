<script lang="ts">
	export let name: string;
	import Card from "./components/Card.svelte"

	var cards = [];

	function addCard() {
		cards = [...cards, 1];
	}
</script>

<main>
	{#each cards as card}
		<Card></Card>
		{:else}
		<p>no cards</p>
	{/each}
	<button on:click={addCard}>Add Card</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>