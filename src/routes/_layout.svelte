<script>
	import Nav from '../components/Nav.svelte';
    import Contact from '../components/Contact.svelte';

    import Modal from '../components/Modal.svelte';
    import AboutModal from '../components/AboutModal.svelte';
    import ContactModal from '../components/ContactModal.svelte';
    import ProjectsModal from '../components/ProjectsModal.svelte';

	export let segment;

    import { showModal, showContactModal, showAboutModal, showProjectsModal } from '../store.js'
</script>

<style>
	main {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
        height: 100vh;
        width:100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

{#if $showModal}
	<Modal on:close={() => showModal.set(false)}>
		{#if $showAboutModal}
			<AboutModal></AboutModal>
		{/if}
		{#if $showContactModal}
                <ContactModal on:closeModal={() => {
                    showContactModal.set(false)
                    showModal.set(false)
                }}></ContactModal>
		{/if}
        {#if $showProjectsModal}
			<ProjectsModal></ProjectsModal>
		{/if}
	</Modal>
{/if}

<Contact {segment}/>
