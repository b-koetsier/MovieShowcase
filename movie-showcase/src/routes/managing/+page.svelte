<script>
	import { writableArray } from "../../stores";
	import { slideDuration } from "../../stores";
    import { carouselItemCount } from "../../stores";

    let Title;
    let Year;
    
    let carouselDuration = $slideDuration;

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
		}]);
	}
        function removeMovie(movie) {
        writableArray.update(arr => {
        return arr.filter(m => m !== movie);
    });
}
        
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
    </div>
    
    <div class="card">
        <p class="title">Settings</p>
        <form class="form">
            <div class="settingOption">
                <p>Slide time:</p>
                <input type="number" bind:value={$slideDuration}> Second(s)
            </div>
            <div class="settingOption">
                <p>Amount of movies in a slide</p>
                <input type="number" bind:value={$carouselItemCount}>
            </div>
        </form>
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
        overflow-y: scroll;
    }
    .form {
        display: flex;
        flex-direction: column;

        align-items: left;
        gap:10px;
    }
    .settingOption {
        display:inline-flex;
        align-items: center;
        justify-content: left;
        max-width:100%;
        max-height: 20px;
        gap:2px;
        margin:10px
    }
    #movielist {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start; 
    border: solid black 1px;
    margin: 10px;  
    overflow-y: scroll;
    height:50%;
}

#movieitem {
    margin: 10px;
    padding: 10px;
    background: gray;
    color: white;
    flex: 1 1 calc(100% / 3 - 20px); /* Make each item take up 1/3 of the available width, with spacing */
    box-sizing: border-box;
    max-width: 100%; /* Ensure the item doesn't overflow the container */
}
</style>