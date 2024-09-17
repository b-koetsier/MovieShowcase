<a href="/" class="home-button">Home</a>
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
    .home-button {
        background: rgb(210, 162, 162);
        border: solid black 1px;
        width: 10px;
        height: 10px;
        padding: 2px;
        text-decoration: none;
        color: black;
        text-align: center;
        position: sticky;
    }
</style>
