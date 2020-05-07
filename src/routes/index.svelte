<script>

        let bgImage = "web-background.svg";

</script>

<style>

        .container {
                width: 100%;
                height: 100%;
                background-color: #efefef;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
        }

        .text-box {
                position: absolute;
                left: calc(100vw - 60%);
                top: 40%;
                width: 40%;
                height: 400px;
        }

        h1 {
                color: #c3653e;
                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
        }

</style>

<svelte:head>
        <title>Welcome</title>
</svelte:head>

<div class="container" style="background-image: url('{bgImage}')">
    <div class="text-box">
        <h1>I am a web developer drvien by curiosity, concepts, and coffee.</h1>
    </div>
</div>
