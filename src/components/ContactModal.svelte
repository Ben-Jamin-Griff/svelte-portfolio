<script>
        import { createEventDispatcher } from 'svelte';
        import { stores } from '@sapper/app'
        const dispatch = createEventDispatcher();

        let name=''
        let email=''
        let description=''

        const submit = () => {
                dispatch('closeModal')
        }

</script>

<style>
        h1 {
                color: #c3653e;
                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
        }

        div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }

        button {
	            background-color: rgb(255, 90, 95);
	            color: white;
                font-weight: bold;
	            font-size: 13px;
	            width: 250px;
	            border: none;
	            height: 40px;
	            border-radius: 8px;
	            cursor: pointer;
        }

        form {
                width: 100%;
        }

        input[type=text], input[type=email] {
                display: block;
                padding: 20px;
                font-size: 20px!important;
                width: 100%;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-bottom: 10px;
        }

</style>

<div>
    <h1>Get in touch</h1>
    <form on:submit|preventDefault={submit}>
        <input bind:value={name} type="text" placeholder="Name" />
        <input bind:value={email} type="email" placeholder="Email address" />
        <input bind:value={description} type="text" placeholder="Send a message..." />
        <button>Submit</button>
    </form>
</div>
