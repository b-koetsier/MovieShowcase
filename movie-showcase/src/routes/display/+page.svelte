<script lang="ts">
    import { onMount } from 'svelte';
	import type { PageData } from './$types';
    import { replaceState } from '$app/navigation';
    import Carousel from 'svelte-carousel'
	
    import { writableArray } from '../../stores';
	export let data: PageData;
    
        
</script>

<main>
    
    {#if $writableArray.length >= 1} 
    <Carousel
    autoplay
    autoplayDuration={5000}
    >
        {#each $writableArray as item}
        <ul>
            <li class="poster">
                <img src={item.Poster}/>
            </li>
            <div id="moviedesc">
                    <li>
                    {item.Title}
                    </li>
                    <li>
                    {item.Year}
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
        box-shadow: 5px 10px #2a0000;
        background: #7b7694;
        margin: 0 auto;
        border: solid white 1px;
        height:80vh;
        width:60vw;
    }
    li {
        list-style-type:none;    
    }


    .poster {
        position: relative;
        width:60vw;
        height:auto;
    }
    .poster img{
        position: relative;
        width:30%;
        height:auto;
        margin:15px;
        z-index: 1;
    }
    #moviedesc {
        background-color: rgb(93, 87, 124);
        opacity: 0.75;
        z-index: 5;
        width: 80%;
        height: auto;
        padding:10px;
    }
</style>