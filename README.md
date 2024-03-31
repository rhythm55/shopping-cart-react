# Requirements 
Using Java, write a program that calculates the price of a basket of shopping.

The solution should be accomplished in roughly two hours.

Items are presented one at a time, in a list, identified by name - for example "Apple" or "Banana".

Multiple items are present multiple times in the list, so for example ["Apple", "Apple", "Banana"] is a basket with two apples and one banana.
 
Items are priced as follows:

 - Apples are 35p each
 - Bananas are 20p each
 - Melons are 50p each, but are available as ‘buy one get one free’
 - Limes are 15p each, but are available in a ‘three for the price of two’ offer

Given a list of shopping, calculate the total cost of those items.

# Features

## Shopping page
 -  Shopping page consisting of two sections
    - Item list - list of available shopping items with cost per item
    - Cart - displays items added in cart


https://github.com/rhythm55/netflix-gpt/assets/36883992/2dee0a01-348a-49a6-bd6d-b3f0e1ff72e5


## Item List
- Item List in format [{ id, name, cost, offerAvailable }]
- gives option to add item in cart
![Screenshot 2024-03-31 at 2 30 48 PM](https://github.com/rhythm55/netflix-gpt/assets/36883992/85775792-ebcd-4249-9d11-d0411a024209)

## Cart
- if no item added it displays empty cart message
- if items are added it will merge them into one item and update quantity
- displays total cost of each item as per the offer applicable
- displays the total cart cost
  
![Screenshot 2024-03-31 at 2 31 47 PM](https://github.com/rhythm55/netflix-gpt/assets/36883992/bb1a3190-4347-49dc-99df-073f7c17125a)
![Screenshot 2024-03-31 at 2 31 04 PM](https://github.com/rhythm55/netflix-gpt/assets/36883992/b6162131-a144-4d3e-91f8-38513a8e518b)

***
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

