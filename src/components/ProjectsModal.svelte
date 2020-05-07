<script>

        import projects from './_projects.js'

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

</style>

<div>
        <h1>{title}</h1>
        <img src="{picture}" width="100%" style="" alt="" />
        <p>{description}</p>
        <button>Live Project</button>
        <button>Code</button>
</div>
