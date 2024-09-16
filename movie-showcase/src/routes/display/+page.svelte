<script lang="ts">
    import Carousel from 'svelte-carousel'	
    import { writableArray } from '../../stores';
</script>

<main>
    {#if $writableArray.length >= 1} 
    <Carousel
    autoplay
    autoplayDuration={5000}
    >
        {#each $writableArray as item}
        <ul>
            <li id="poster">
                <img alt="poster" src={item.Poster}/>
            </li>
            <div id="moviedescription">
                    <li id="title">
                    {item.Title}
                    </li>
                    <li>
                    {item.Year} -
                    </li>
                    <li>
                    {item.Plot}
                    </li>
            </div>
        </ul>
        {/each}
    </Carousel>
    {/if}
    
</main>

<style>
    ul {
        background: white;
        margin: 0 auto;
        height:80vh;
        width:60vw;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
    }
    li {
        list-style-type:none;   
    }
    #poster {
        position: relative;
        width:auto;
        height:100%;
        float:left;
        align-content: center;
    }
    #poster img{
        position: relative;
        width:auto;;
        height:90%;
    }
    #title {
        font-size: 70px;
    }
    #moviedescription {  
        width: 80%;
        height: auto;
        padding:10px;
    }
</style>