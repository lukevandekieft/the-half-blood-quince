# _The Half-Blood Quince_

#### _A Virtual Cookbook App, 12/1/18_

#### By _**Luke Vandekieft**_

## Project Description

At its core this app is a virtual cookbook. Where existing cooking apps emphasize ease of use this project focuses on improving the traditional cookbook model with modern technology.

Plenty of powerful cooking apps exist like Pinterest, Yummly, and AllRecipes. My personal favorite Yummly provides over 2 million recipes, easy serving adjustments, a shopping list, and suggested recipes. With all those benefits why bother making yet another contender?

I feel that popular cooking apps gain functionality at the expense of personalization. In a printed book I can add any recipe I want simply by inserting a page and I can add notes by simply writing in the margins, a la Harry Potter’s Half-Blood Prince. By contrast I cannot edit an online recipe without the author’s permission and recipe apps don't always include meaningful note-taking or authorship options. Furthermore every app has a limited repertoire so more obscure recipes can't be included (looking at you, vegan mapo tofu). These are basic but important needs that have prevented me from going all-in with an existing platform.

While Half-Blood Quince isn't as powerful or flashy as others it allows unprecedented customization: all your recipes can be added and edited just like a print cooking binder! Welcome to home base for storing, editing, and growing your recipe collection.
<br>
<br>
<br>

**Current Goals:**

* 'Suggested Recipes' and 'Search Recipes' sections from 3rd parties.
* Improve messages and parsing for user login fields.
* Improve functions for parsing user-submitted data like ingredients.
* Add servings feature that alters ingredient list amounts multiplicatively based on user-entered serving number.
* Allow each individual ingredient/direction to have its own note(s) - MVP data structure just has a lump of notes alluding to a lump of data.
* Add “considered” note type to be distinguished from “confirmed” notes (e.g. “Try serving with rice” vs. “can sub rice for flatbread”).
* Give recipes tags & categories for searching & organizing.
* API calls to spoontacular’s Food API, Edamam’s Recipe Search API, or similar database.
* Better solutions for button selection: currently menu icon has no pretty option to show it's been tabbed.


## Setup/Installation Requirements

Live site is at https://www.halfbloodquince.com/         
<br>
<br>

To download & edit do the following:

* Download file from Github.

      $ git clone https://github.com/lukevandekieft/half-blood-quince.git

* Install NPM (node package manager) as needed - instructions can be found at https://www.npmjs.com/get-npm .

* Install necessary webpack dependencies for project.

      $ npm install

* Create file src/constants/firebaseConfig.js and include the following. You will need to get the API key and sender ID from me.

      const firebaseConfig = {
          apiKey: "[YOUR KEY]",
          authDomain: "half-blood-quince.firebaseapp.com",
          databaseURL: "https://half-blood-quince.firebaseio.com",
          projectId: "half-blood-quince",
          storageBucket: "half-blood-quince.appspot.com",
          messagingSenderId: "[YOUR ID]"
        };

      export default firebaseConfig;

* Compile and open webpage in developer mode.

      $ npm run start


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
* [_Custom React Scripts_](https://www.npmjs.com/package/custom-react-scripts)

## Support and contact details

If you have any concerns or suggestions please contact Luke Vandekieft at vandekie@gmail.com

### License

*This software is licensed under the MIT License.*

Copyright (c) 2018 **_Luke Vandekieft_**
