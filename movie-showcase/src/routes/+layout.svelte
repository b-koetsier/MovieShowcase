<script>
    let shownav = true;
    function toggle(){
        shownav = !shownav;
        console.log(shownav)
    }
</script>

{#if shownav}
<div id="navbar">
    <a href="/display">show</a>
    <a href="/managing">add</a>
</div>
{/if}



<button style="float:right" on:click={toggle}>o</button>


<slot class="slot"/>

<style>
    :global(body){
        background: linear-gradient(90deg, rgba(199,219,247,1) 0%, rgba(191,199,222,1) 35%, rgba(197,149,148,1) 100%);


        color: aliceblue;
    }
        #navbar {
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: #333;
    }

    /* Navbar links */
    #navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    }
</style>