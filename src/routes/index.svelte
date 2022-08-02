<style>
li {
	margin-top: 2rem;
	font-size: 1.5rem;
}
</style>

<script>
import Card from '../components/card.svelte';
</script>

<svelte:head>
	<title>NieKo UI</title>
</svelte:head>

<main class="flex flex-col items-center relative w-full">
	<div class="flex w-2/3 pt-20 justify-between">
		<Card>
			<h2 class="text-4xl font-semibold">Things this site has</h2>
			<ul>
				<li>Simplistic Layout</li>
				<li>Fancy Backgrounds</li>
				<li>More Fancy Backgrounds</li>
				<li>Cool Glass Panels</li>
			</ul>
		</Card>

		<Card>
			<h2 class="text-4xl font-semibold">What it doesn't have</h2>
			<ul>
				<li>Anything Useful</li>
				<li>Interesting Mechanics</li>
				<li>Custom JavaScript</li>
				<li>A Purpose</li>
			</ul>
		</Card>
	</div>
</main>
