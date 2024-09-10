<script>
	import { writableArray } from "../../stores";
	let Title;
    let Year;
	async function addToArray() {
        
        
       

        const response = await fetch(
            'https://www.omdbapi.com/?t='+Title+'&y='+Year+'&apikey=ab9aee8f', {
            method: 'GET'
        });
       
        let movie = await response.json();      
        let keys;
        keys = Object.entries(movie);
        
        
            $writableArray = [...$writableArray, {
			    Title: movie.Title,
                Year: movie.Year,
                Plot: movie.Plot,
                Poster: movie.Poster,
		}];
 
	};
</script>
<div id=test>
    Title: <input bind:value={Title} />
    Year: <input bind:value={Year} />
    <button id="add" on:click={addToArray}>
        Add item
    </button>

    {#each $writableArray as item}
    <p>
        {item.Title}
    </p>
    {/each}
</div>


<style>
    #add{
        background-color: #80d249;
        top:50px;
    }
    #test {
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