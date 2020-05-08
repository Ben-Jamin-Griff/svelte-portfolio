<script>

        import projects from '../routes/_projects.js'


        let projectCode = 0;
        let project = projects[projectCode];
        
        function handleClick() {
                console.log(projectCode)
                if(projectCode < 2) {
                        projectCode += 1;
                        project = projects[projectCode];
                }
        }

        function handleClickBack() {
                console.log(projectCode)
                if(projectCode > 0) {
                        projectCode -= 1;
                        project = projects[projectCode];
                }
        }

</script>

<style>
        h1 {
                color: #c3653e;
                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
                grid-column-start: 1;
                grid-column-end: span 2;
                grid-row: 1;
                grid-row-end: span 1;
                justify-self: center;
                padding-top: 0.7em;
        }

        img {
                width: 60%;
                grid-column-start: 1;
                grid-column-end: span 1;
                grid-row: 2;
                grid-row-end: span 1;
                justify-self: center;
                align-self: center;
        }

        p {
                grid-column-start: 2;
                grid-column-end: span 1;
                grid-row: 2;
                grid-row-end: span 1;
                justify-self: start;
                align-self: center;
                padding: 1em;

        }

        div {
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: 50px 400px 70px 50px;
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
                justify-self: center;
        }

        .nav {
                background-color: #abd8cd;
        }

</style>

<div>
        <h1>{project.title}</h1>
        <img src="{project.picture}" style="" alt="" />
        <p>{project.description}</p>
        <button onclick="window.open('{project.live}');">Live Project</button>
        <button onclick="window.open('{project.repo}');">Code</button>
        <button class="nav" on:click={handleClickBack}>Previous Project</button>
        <button class="nav" on:click={handleClick}>Next Project</button>
</div>
