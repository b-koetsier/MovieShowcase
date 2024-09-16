<script lang="ts">
    import Carousel from 'svelte-carousel'	
    import { writableArray } from '../../stores';
    import { slideDuration } from '../../stores';
    import { carouselItemCount } from '../../stores';    
    import { onMount } from "svelte";

    onMount(checkSettings);

    function checkSettings(){
        if($slideDuration == 0 || $slideDuration == null) $slideDuration = 5;
        if($carouselItemCount == 0 || $carouselItemCount == null) $carouselItemCount = 1;
    }
</script>

{#if $writableArray.length >= 1} 
    <Carousel
    particlesToShow={$carouselItemCount}
    autoplay
    autoplayDuration={0}
    duration={$slideDuration * 1000}
    timingFunction="linear"
    dots={false}
    arrows={false}
    swiping={false}
    >

    {#each $writableArray as item}
    <div id="card">
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
    </div>
    {/each}
    
</Carousel>
{/if}

<style>
    #card {
        background: rgb(198, 198, 198);
        border: solid rgb(229, 229, 229) 3px;
        margin: 0 auto;
        height:80vh;
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
        height:70%;
        float:left;
        align-content: center;
    }
    #poster img{
        margin:10px;
        position: relative;
        width:auto;;
        height:auto;
    }
    #title {
        font-size: 30px;
        word-wrap: break-word;
    }
    #moviedescription {  
        width: 100%;
        height: auto;
        padding:10px;
        overflow-x: auto;
    }
</style>