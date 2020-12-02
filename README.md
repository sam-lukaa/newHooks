++ React hooks application showing how to apply useReducer, useEffect and useState both in simple and complex scenerios.

++ Documentation

-- App.js is to display the data on screen for users
-- index.js(reducer) is acting like the redux reducer. It's performing the logic
-- index.js(actions) is doing two things. First, we are making use of the reducer we created, as well as setting up the state & second, we applied useEffect to  communicate with the api we are trying to fetch.

## Let's begin with index.js(reducer)
-- We created a function(Reducer) with two callbacks(state, action)
-- the action carries two object values, namely payload and type. So instead of using something like(action.type or action.payload), we destructured it so that we can easily use them as in(type, payload).
-- You may be wondering why we are using the object/ curly brackets to destructure and not array/box brackets. That's because to get items from arrays, you make use of the "map()", while for objects we make use of the ".", so since it's in the form -action.type or action.paylaod, we know it is an object, therefore we use the "."
-- Next up, we created a switch statement where all cases for the api rendering will go, and we passed in a callback of type.
-- the first case is for the initial rendering of the api, where the api is being called whereby we are yet to receive any value or response from the api. What do we want it to do? We just want to return that state(soon to be created) & set loading to true(I know we haven't created any instance for that yet). - "INIT_FETCH"
-- the second case is for the fetched data instance, where we have received a positive response from the api(data). In this situation, we just want to have a value(called data) holding the response/result(called payload). So what we do is that we return the original state, and alter the value of data to be payload(yet, we haven't created any instance for these, we soon will), and since the value of the loading state has been altered, we have to set it back to false - "SUCCESS_FETCH"
-- third, what if there was an error in the process of fetching and the api couldn't return any data, we want to return the state and alter the error instance set to true and since the value of the loading state has been altered, we have to set it back to false. - "FAIL_FETCH"
-- now it's possible none of these happens, we just want to have a default case set to the state without altering anything in it

--Next up, we export the Reducer function. - "export default Reducer"

## Let's move on to the index.js(actions)
-- Basically, what we will be doing here is to both consume the reducer by making use of it with the help of "useReducer", within which we will create the instances we were altering above, and second, we want to make a request to an api with the help of "useEffect". So start by importing those two from "react".
-- Furthermore, whenever we are making use of useEffect, we need axios to actually carry out the type of request(get, post...), so also import axios from "axios"
-- Also, since we are consuming the reducer we created earlier on, let's import it as well.