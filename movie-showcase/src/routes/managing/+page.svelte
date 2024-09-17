<script lang="ts">
    import { movieArray } from "../../stores";
    import { slideDuration } from "../../stores";
    import { carouselItemCount } from "../../stores";

    let title: string;
    let year: string;

    async function addToArray() {
        const response = await fetch("/managing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                year: year,
            }),
        });

        const movie = await response.json();

        movieArray.update((arr) => [
            ...arr,
            {
                Title: movie.Title,
                Year: movie.Year,
                Plot: movie.Plot,
                Poster: movie.Poster,
            },
        ]);
    }
    function removeMovie(movie) {
        movieArray.update((arr) => {
            return arr.filter((m) => m !== movie);
        });
    }
</script>

<div class="card-small">
    <!-- Submit to add a movie -->
    <p class="title">Add a movie</p>
    <form on:submit={addToArray}>
        Title: <input type="text" bind:value={title} />
        Year: <input type="text" bind:value={year} />
        <input type="submit" value="Add" />
    </form>

    <!-- Movie Preview -->
    <!-- Loop over fetched movies and show as item-->
    <p class="title">Current Movies</p>
    <div class="movie-list">
        {#each $movieArray as item}
            <div class="movie-item">
                <p>{item.Title}</p>
                <p>{item.Year}</p>
                <button on:click={(event) => removeMovie(item)}>remove</button>
            </div>
        {/each}
    </div>
</div>

<div class="card-small">
    <p class="title">Settings</p>
    <form class="form">
        <div class="setting">
            <p>Slide time:</p>
            <input type="number" bind:value={$slideDuration} /> Second(s)
        </div>
        <div class="setting">
            <p>Amount of movies to show</p>
            <input type="number" bind:value={$carouselItemCount} />
        </div>
    </form>
</div>

<style>
    .card-small {
        margin: 2vw;
        background: white;
        width: 30vw;
        height: 40vh;
        text-align: center;
        box-shadow: 10px 5px black;
        text-decoration: none;
        color: black;
        overflow-y: scroll;
    }
    .form {
        display: flex;
        flex-direction: column;

        align-items: left;
        gap: 10px;
    }
    .setting {
        display: inline-flex;
        align-items: center;
        justify-content: left;
        max-width: 100%;
        max-height: 20px;
        gap: 2px;
        margin: 10px;
    }
    .movie-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        border: solid black 1px;
        margin: 10px;
        overflow-y: scroll;
        height: 50%;
    }

    .movie-item {
        margin: 10px;
        padding: 10px;
        background: gray;
        color: white;
        flex: 1 1 calc(100% / 3 - 20px);
        box-sizing: border-box;
        max-width: 100%;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
    }
</style>
