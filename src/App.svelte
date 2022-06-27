<script lang="ts">
	export let name: string;
	import Card from "./components/Card.svelte"

	var cards = [];
	let input = "place holder"

	function addCard() {
		cards = [...cards, input];
	}
</script>

<main>
	{#each cards as card}
		<Card title={card}></Card>
		{:else}
		<p>no cards</p>
	{/each}
	<div class="input-container">
		<input bind:value={input}>
		<button on:click={addCard}>Add Card</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.input-container {
		position: fixed;
		bottom: 0px;
		right: 0px;
		margin: 20px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>