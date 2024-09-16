<script>
	import { writableArray } from "../../stores";
	
    let Title;
    let Year;

	async function addToArray() {
		const response = await fetch('/managing', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: Title,
				year: Year
			})
        });

		const movie = await response.json();
 
		writableArray.update(arr => [...arr, {
            Title: movie.Title,
            Year: movie.Year,
            Plot: movie.Plot,
            Poster: movie.Poster,
    }];
};
</script>

    <div class=card> 
        <!-- Call to add a movie -->
        <p class="title">Add a movie</p>
        <form on:submit={addToArray}>
            Title: <input type="text" bind:value={Title}/>
            Year: <input type="text" bind:value={Year} />
            <input type="submit" value="Add"/>
        </form>

    <!-- Movie Preview -->
        <p class="title">Current Movies</p>
        <div id="movielist">

        <!-- Loop over fetched movies and show as item-->
    {#each $writableArray as item}
            <div id="movieitem">
                <p>{item.Title}</p> <p>{item.Year}</p>
                <button on:click={(event) => removeMovie(item)}>remove</button>
            </div>
    {/each}
</div>

<style>
    .card {
        margin:2vw;
        background: white;
        width:30vw;
        height:40vh;
        text-align: center;
        box-shadow: 10px 5px black;
        text-decoration: none;
        color: black;
        align-content: center;
    }
</style>