# Pokedex

This is a project that list all available pokemon by pagination using [pokemon](https://pokeapi.co/) api

## Description

- Display all Pokemon by pagination
- Search by Pokemon
- Show a pokemon full detail
  - stats
  - moves
  - species
  - name
  - weight

## Approach

#### Pokemon

Task require building a web app that shows paginated pokemon and also filter by poekmon name.
 I know that I would like to have a method that does the fetching whenever I enter the page and also when I search by pokemon name. This requires page refreshing when a dependency change and also pagination should work the same way.

- There is a custom hook `useFetchPokemon` that takes in the url, offset and query.
- offset and url are dependency that refetches the data when they change.
- query is passed to use as check to use a new url to fetch pokemon by name when the query has a value.
- The url passed to `useFetcchPokemon has a signature of`<https://pokeapi.co/api/v2/pokemon?offset={offset}&limit>=`16` and the query is passed to the url as `https://pokeapi.co/api/v2/pokemon/{query}`.
- Requests are made based on the page number and limit which return exactly an array of 16 pokemon at a time and I see this approach to be efficient and optimal because this put into consideration the amount of data that is being fetched if the data is large. I also see that the data is being fetched only when the page number changes.
- For the details page, I used modal to display the pokemon details. I wanted to make it as simple as possible.

#### Pagination

- The pagination is built using [tui-pagination](https://github.com/nhn/tui.pagination)
- There is a Pagination component that handles all pagination logic.

## Improvements

- I would like to improve the css for the display details modal.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
