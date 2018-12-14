# _The Half-Blood Quince_

#### _A Virtual Cookbook App, 12/1/18_

#### By _**Luke Vandekieft**_

## Project Description

**Goal:**

At its core this app is a virtual cookbook. Where existing cooking apps emphasize ease of use this project focuses on improving the traditional cookbook model with modern technology.

Plenty of powerful cooking apps exist like Pinterest, Yummly, and AllRecipes. My personal favorite Yummly provides over 2 million recipes, easy serving adjustments, a shopping list, and suggested recipes. With all those benefits why bother making yet another contender?

I feel that popular cooking apps gain functionality at the expense of flexibility and personalization. In a printed book I can add any recipe I want simply by inserting a page and I can add notes by simply writing in the margins, a la Harry Potter’s Half-Blood Prince. By contrast you cannot edit an online recipe without the author’s permission and recipe-hosting apps rarely include meaningful note-taking or authorship options. These are basic but important needs that have prevented me from going all-in with an existing platform.

While Half-Blood Quince won’t be as powerful or flashy as Yummly it will allow unprecedented customization in the cooking arena: all your recipes can be added and edited just like in a print cooking binder. The Half-Blood Quince is home base for storing, editing, and growing your recipe collection and will act as a helpful companion for all your other cooking technologies.
<br>
<br>
<br>
**MVP Goals:**

* Persistent data that stores recipe objects.
* CRUD functionality for recipes. "Add" section will have ingredients, ingredient notes, directions, direction notes, and a link to recipe page (if applicable).
* Adding notes to directions and ingredients (e.g. " '-2 peppers' <-- use 4 for spicy")
* Editing directions and ingredients permanently (e.g. change 'salt to taste' to '1 tsp salt').</ul>



**Tools, frameworks, libraries, etc. needed for MVP:**

* React library for CRUD, UI, creating modular recipe components, etc.
* JavaScript and JSX as needed for program logic to implement the above.
* HTML and JSX as needed for program structuring in React.
* CSS, Sass, and JSX as needed for layout and appearance.
* Firebase for persistent data storage.
* Webpack for package management.
* ESLint for linting.
* Jest for testing.



**Post-MVP Stretch Goals:**

* 'Suggested Recipes' and 'Search Recipes' sections from 3rd parties.
* User authentication with unique persistent data for each user.
* Organize directions and instructions as individual line items.
* Add logic to create breaks in user-added ingredients and directions (bullets, returns, hyphens with no preceding letters, etc.)
* Add logic/UI that pinpoint number values in user-added ingredients.
* Add servings feature that alters ingredient list amounts multiplicatively based on user-entered serving number.
* Allow each individual ingredient/direction to have its own note(s) - MVP data structure just has a lump of notes alluding to a lump of data.
* Add “considered” note type to be distinguished from “confirmed” notes (e.g. “Try serving with rice” vs. “can sub rice for flatbread”).
* Add specific 'Add Note' UI process that is easier to use, incapable of editing core recipe features, and less severe-looking than the basic update function.
* Give recipes tags & categories for searching & organizing.


**Tools, frameworks, libraries, etc. needed for Stretch Goals:**

* API calls to spoontacular’s Food API, Edamam’s Recipe Search API, or similar database.
* Research user authentication options for current skillset: will Firebase work for this?
* JS research: how hard is it to program a “smart” number reader or line break reader? Are there already code blocks out there that achieve these tasks?



## Setup/Installation Requirements

Live site is at https://half-blood-quince.firebaseapp.com/         
<br>
<br>

To download & edit do the following:

* Download file from Github.

      $ git clone https://github.com/lukevandekieft/half-blood-quince.git

* Install NPM (node package manager) as needed - instructions can be found at https://www.npmjs.com/get-npm .

* Install necessary webpack dependencies for project.

      $ npm install

* Create file src/constants/firebaseConfig.js and include the following. You will need to get the API key and sender ID from me.

      const config = {
          apiKey: "[YOUR KEY]",
          authDomain: "thinkgeek-clone.firebaseapp.com",
          databaseURL: "https://thinkgeek-clone.firebaseio.com",
          projectId: "thinkgeek-clone",
          storageBucket: "thinkgeek-clone.appspot.com",
          messagingSenderId: "[YOUR ID]"
        };

* Compile and open webpage in developer mode.

      $ npm run start


For further support:
Create React App: (https://github.com/facebookincubator/create-react-app)
Custom React Scripts: (https://www.npmjs.com/package/custom-react-scripts)

## Technologies Used

* _React Library_
* _HTML_
* _JavaScript_
* _Sass preprocessor_
* _CSS_
* _Firebase_
* _JSX_
* _Webpack_
* _Sketch_

## Support and contact details

If you have any concerns or suggestions please contact Luke Vandekieft at vandekie@gmail.com

### License

*This software is licensed under the MIT License.*

Copyright (c) 2018 **_Luke Vandekieft_**


## Technologies Used

* _React Library_
* _HTML_
* _JavaScript_
* _Sass preprocessor_
* _CSS_
* _Firebase_
* _JSX_
* _Webpack_
* _Sketch_

## Support and contact details

If you have any concerns or suggestions please contact Luke Vandekieft at vandekie@gmail.com

### License

*This software is licensed under the MIT License.*

Copyright (c) 2018 **_Luke Vandekieft_**
