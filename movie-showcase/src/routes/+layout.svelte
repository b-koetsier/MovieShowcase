<a href="/"><div class="homebutton" /></a>
<slot />

<style>
    :global(body) {
        background: linear-gradient(
            90deg,
            rgba(199, 219, 247, 1) 0%,
            rgba(191, 199, 222, 1) 35%,
            rgba(197, 149, 148, 1) 100%
        );
        color: rgb(0, 0, 0);
    }
    :global(.title) {
        font-size: 20px;
        font-weight: bold;
    }
    .homebutton {
        background: red;
        width: 10px;
        height: 10px;
    }
</style>
