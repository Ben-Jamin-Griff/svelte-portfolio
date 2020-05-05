<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
        height: 90vh;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
