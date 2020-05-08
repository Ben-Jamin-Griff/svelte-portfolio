<script>
	export let segment;

    import { showModal, showContactModal, showAboutModal, showProjectsModal } from '../store.js'

</script>

<style>
	nav {
		font-weight: 300;
		padding: 1em 1em;
        position: absolute;
        width: 95%;
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
        padding-bottom: 1px;
        color: #213958;
        text-transform: uppercase;
    }

    .logo {
        justify-self: start;
    }

	a {
		text-decoration: none;
        font-weight: 600;
	}

    img {
        width: 12em;
    }

</style>

<nav>
	<ul>
            <li class="logo"><img src="logo-01.svg" alt="Benjamin Griffiths"></li>

            <li class="text"><a class='{segment === "projects" ? "selected" : ""}' href='javascript:;' on:click={() => {
				showModal.set(true)
				showAboutModal.set(false)
				showContactModal.set(false)
                showProjectsModal.set(true)
			}}>Projects</a></li>

        <li class="text"><a class='{segment === "about" ? "selected" : ""}' href='javascript:;' on:click={() => {
				showModal.set(true)
				showAboutModal.set(true)
				showContactModal.set(false)
                showProjectsModal.set(false)
			}}>About</a></li>

	</ul>
</nav>
