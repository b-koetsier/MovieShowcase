# MovieShowcase

### This project is a svelte.js narrowcasting single-page application that broadcasts movie data fetched from https://www.omdbapi.com/apikey.aspx, you'll need to request an API Key [here](https://www.omdbapi.com/apikey.aspx) and store it in an .env file after setting the project up

## Prerequisites
Ensure you have the following installed on your machine:

* Node.js (version 14 or higher)
* npm (Comes with Node.js) or Yarn (optional)

To check if Node.js and npm are installed, run the following commands in your terminal:

```console
node -v
npm -v
```
If you don't have Node.js installed, you can download and install it from https://nodejs.org/en/download/package-manager.

## Installation
### Clone the repository
Clone this repository to your local machine using the following command:
```console
git clone https://github.com/b-koetsier/MovieShowcase.git
```
Navigate to the project directory

```console
cd MovieShowcase
```
Install dependencies
Install the necessary project dependencies using npm (or yarn):

```console
npm install
```
Or, if you're using Yarn:

```console
yarn install
```

## API Key

To use the Application, you'll first need to create an .env file in the project root folder, you can use .env.example to format your .env file, or simply copy and rename it.

After creating the .env file, insert the API Key you've requested from [OMDb API](https://www.omdbapi.com/apikey.aspx)
```env
API_KEY=abc12345 #replace the value with your own key
```

## Run it
To run the project locally in development mode, use the following command:

```console
npm run dev
```
Or, with Yarn:

```console
yarn dev
```
By default, it runs at http://localhost:5173.

## Try it out
After you've succesfully installed and booted up the project, you can try to add and display some movies.

When you open the App, click on the "Admin Panel" box on the right side of the home page, under "Add a movie" add the title of your favorite movie and click add.

Now, under "Current Movies" it should show the movie you listed with the Title, Year and a "Remove" button (You can click that to remove the movie, if you dont want it to display anymore.)

Now when you click the "Home" button on the top left and click the "Display Movies" box on the left side of the home page, you'll see your movie in a carousel!

To change the speed the carousel moves at or the amount of movies it shows, you can navigate back to the Admin Panel and under the second box "Settings" you can change those values.
