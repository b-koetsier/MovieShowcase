<script lang="ts">
    import Carousel from "svelte-carousel";
    import { movieArray } from "../../stores";
    import { slideDuration } from "../../stores";
    import { carouselItemCount } from "../../stores";
</script>

{#if $movieArray.length >= 1}
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
        {#each $movieArray as item}
            <div class="card">
                <div class="poster">
                    <img alt="poster" src={item.Poster} />
                </div>
                <div class="moviedescription">
                    <div class="title">
                        {item.Title}
                    </div>
                    <div class="year">
                        {item.Year} -
                    </div>
                    <div class="plot">
                        {item.Plot}
                    </div>
                </div>
            </div>
        {/each}
    </Carousel>
{/if}

<style>
    .card {
        background: rgb(198, 198, 198);
        border: solid rgb(229, 229, 229) 3px;
        margin: 0 auto;
        height: 80vh;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
    }
    .poster {
        position: relative;
        width: auto;
        height: 70%;
        float: left;
        align-content: center;
    }
    .poster img {
        margin: 10px;
        position: relative;
        width: auto;
        height: auto;
    }
    .title {
        font-size: 30px;
        word-wrap: break-word;
    }
    .moviedescription {
        width: 100%;
        height: auto;
        padding: 10px;
        overflow-x: auto;
    }
</style>
