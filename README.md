# MVST-challenge - Marcel Subirana

Dear MVST team,

welcome to my version of the Github page!

The project needs some steps to run properly as described below:

## Get started

Clone the repo:

```bash
$ git clone https://github.com/Marcel2408/mvst-fe.git
$ cd mvst-fe
```

Install dependencies:

```bash
$ npm install
```

Create a ```.env```  in the server folder of this repo.

```bash
$ touch .env
```

Since this project fetches data from the Github v4 API, you will need your key token. Fill the file with the following info:

```
REACT_APP_GITHUB_API_TOKEN=<Your GithubAPI token>
```

## Run the app

Start the client:

```bash
$ npm start
```

Being a CRA, by default it will run on localhost:3000.

## Notes

Stack: React with Apollo Client, together with Sass as a CSS preprocessor.

For linting I use ESLint with the Airbnb setup.

Relevant dependencies:

Use [@apollo/client](https://www.npmjs.com/package/@apollo/client) to fetch data from GraphQL and cache it.

Use [graphql](https://www.npmjs.com/package/graphql) to get the logic to query the API.

Use [moment](https://www.npmjs.com/package/moment) to correctly format the last update time of each repo.

Use [node-sass](https://www.npmjs.com/package/node-sass) to be able to style the app using ```.scss```files.



DevDependencies:

Use [Enzyme](https://www.npmjs.com/package/enzyme) with Jest to develop tests.

[@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17): well maintained and with many downloads, yet unofficial package to adapt Enzyme to React 17.

Use [check-prop-types](https://www.npmjs.com/package/check-prop-types) to check the correct types in every component. Despite being an old package, it barely has any issue on npm and a decent amount of downloads per week.

Use [commitizen](https://www.npmjs.com/package/commitizen) to keep clean an well structured commits.

I decided to create a HOC 'HomePageContainer' to query the repositories from the GraphQL  Github v4API and make it available to the rest of the app. 

In line 10 of HomePageContainer.jsx you can query for a user by introducing the login name, and it will be displayed on the screen.

### Testing

I added unit tests to the application. However, it is important to note that I only tested the following components: App, HomePage, Header and Searchbar,  as well as the helper methods. 

Also, I didn't apply all possible tests to every component (for instance checking the correct render of all elements in a component) since this testing section has been thought for demonstration purposes.

## Final comments

I accomplished the requirements (search functionality) and tried to go for all extras, querying from the v4API via GraphQL documenting the code and adding unit tests.

Thank you for the opportunity and I really hope you like it! 

## About me

Thank you for the opportunity and I really hope you like it!

- Marcel Subirana - [Github](https://github.com/marcel2408) - [LinkedIn](https://www.linkedin.com/in/marcel-subirana-campanera/)

 