<script>

        import { fade } from 'svelte/transition';
        import { onMount } from 'svelte';

        let visibleAbout = false;

        onMount(() => {
		const interval = setTimeout(() => {
            return visibleAbout = true;
        }, 500);});

</script>
<style>

        div {
                padding-top: 100px;
        }

</style>

<svelte:head>
	<title>About</title>
</svelte:head>

{#if visibleAbout}
<div transition:fade="{{delay: 0, duration: 200}}">

    <h1>More about me</h1>

    <p>Here you'll find all of my personal projects including; full-stack web development, product design, photography and random scribbling.</p>

</div>
{/if}
