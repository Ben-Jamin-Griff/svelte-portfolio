<script>
	export let segment;

    import { showModal, showContactModal, showAboutModal, showProjectsModal } from '../store.js'

</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 2em;
        padding-bottom: 1em;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
	}

	ul {
		margin: 0;
		padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
	}

    .text {
        padding-bottom: 20px;
        color: white;
        text-transform: uppercase;
    }

	a {
		text-decoration: none;
        font-weight: 600;
	}

</style>

<nav>
	<ul>
        <li class="text"><a class='{segment === "contact" ? "selected" : ""}' href='javascript:;' on:click={() => {
				showModal.set(true)
				showAboutModal.set(false)
				showContactModal.set(true)
                showProjectsModal.set(false)
			}}>Contact Me</a></li>
	</ul>
</nav>
