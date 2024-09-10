<div id="select">
    <a class="option" href="/display"><div class="container"><h1>Display</h1></div></a>
    <a class="option" href="/managing"><div class="container"><h1>Add Movies</h1></div></a>
</div>

<style>
    #select {
        height: 100vh;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
        gap: 20vw;        
    }
    .option {
        background: white;
        width:30vw;
        height:40vh;
        text-align: center;
        box-shadow: 10px 5px black;
        text-decoration: none;
        color: black;
    }
    .container {
        align-content: center;
        height: 100%;
    }    
</style>