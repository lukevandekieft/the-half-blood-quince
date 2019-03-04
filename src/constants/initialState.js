export const initialState = {
  isRouting: false,
  searchValue: null,
  showPopup: false,
  user: {
    uid: 'initialLoadUser',
  },
  users : {
    initialLoadUser : {
      currentRecipeId : null,
      loadedInitialState: false,
      recipes : {
        split_pea_soup : {
          name : "Split Pea Soup",
          imageLink : "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps22295_HWS1227354D43B.jpg",
          url : "https://www.tasteofhome.com/recipes/vegetarian-split-pea-soup/",
          ingredients : [
            '6 cups vegetable broth',
            '2 cups dried green split peas, rinsed',
            '1 medium onion, chopped',
            '1 cup chopped carrots',
            '2 celery ribs with leaves, chopped',
            '2 garlic cloves, minced',
            '1/2 teaspoon dried marjoram',
            '1/2 teaspoon dried basil',
            '1/4 teaspoon ground cumin',
            '1/2 teaspoon salt',
            '1/4 teaspoon pepper',
            '5 tablespoons shredded carrots',
            '2 green onions, sliced'
          ],
          ingredientsNotes : [
            'Can sub oregano for marjoram',
            'add clove powder for ham flavor',
            'add bay leaf',
            'consider half-blended for somewhat chunky texture',
            'get whole wheat baguette',
            'add a little bit of liquid smoke before blending, add bacon bits at the end'
          ],
          directions : [
            'In a large saucepan, combine the first nine ingredients; bring to a boil. Reduce heat; cover and simmer for 1 hour or until peas are tender, stirring occasionally.',
            'Add salt and pepper; simmer 10 minutes longer. Cool slightly. In small batches, puree soup in a blender; return to the pan. Heat for 5 minutes. Garnish with shredded carrots and green onions.'
          ],
          directionsNotes : [
            'consider half-blended for somewhat chunky texture',
            'add a little bit of liquid smoke before blending, add bacon bits at the end'
          ]
        }
      }
    }
  }
};
