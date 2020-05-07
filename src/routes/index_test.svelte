<script>

        import { fade } from 'svelte/transition';
        import { onMount } from 'svelte';

        let visibleName = false;
        let visibleLogo = false;

        onMount(() => {
		const interval = setTimeout(() => {
            return visibleLogo = true;
        }, 200);});

        onMount(() => {
        const interval2 = setTimeout(() => {
            return visibleLogo = false;
        }, 1500);});

        onMount(() => {
        const interval3 = setTimeout(() => {
            return visibleName = true;
        }, 2200);
        });

</script>
<style>

    svg {
            width: 40em;
    }

    .logo {
            padding-top: 300px
    }

    .LoaderBalls {
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.LoaderBalls__item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
}
.LoaderBalls__item:nth-child(1) {
  animation: bouncing 0.4s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95);
}
.LoaderBalls__item:nth-child(2) {
  animation: bouncing 0.4s 0.1s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
}
.LoaderBalls__item:nth-child(3) {
  animation: bouncing 0.4s 0.2s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
}

@keyframes bouncing {
  0% {
    transform: translate3d(0, 10px, 0) scale(1.2, 0.85);
  }
  100% {
    transform: translate3d(0, -20px, 0) scale(0.9, 1.1);
  }
}

</style>

<svelte:head>
        <title>Welcome</title>
</svelte:head>

{#if visibleLogo}
        <div class="logo LoaderBalls" transition:fade="{{delay: 0, duration: 200}}">
            <div class="LoaderBalls__item"></div>
	        <div class="LoaderBalls__item"></div>
	        <div class="LoaderBalls__item"></div>
        </div>
{/if}

{#if visibleName}
<div>
        <h3>Full stack web develoepr</h3>
</div>
{/if}


