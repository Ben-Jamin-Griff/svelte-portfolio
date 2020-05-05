<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>

	    export let posts;

        import { fade } from 'svelte/transition';
        import { onMount } from 'svelte';

        let visibleProjects = false;

        onMount(() => {
		const interval = setTimeout(() => {
            return visibleProjects = true;
        }, 500);});

</script>

<style>

    div {
        padding-top: 100px;
    }

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

{#if visibleProjects}
<div transition:fade="{{delay: 0, duration: 200}}">

<h1>Recent work</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

</div>
{/if}
