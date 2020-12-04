# React hooks application showing how to apply useReducer, useEffect and useState both in simple and complex scenerios.

# Documentation

App.js is to display the data on screen for users

index.js(reducer) is acting like the redux reducer. It's performing the logic

index.js(actions) is doing two things. First, we are making use of the reducer we created, as well as setting up the state & second, we applied useEffect to communicate with the api we are trying to fetch.

## Let's begin with index.js(reducer)

We created a function(Reducer) with two callbacks(state, action)
the action carries two object values, namely payload and type. So instead of using something like(action.type or action.payload), we destructured it so that we can easily use them as in(type, payload).

You may be wondering why we are using the object/ curly brackets to destructure and not array/box brackets. That's because to get items from arrays, you make use of the "map()", while for objects we make use of the ".", so since it's in the form -action.type or action.paylaod, we know it is an object, therefore we use the "."

Next up, we created a switch statement where all cases for the api rendering will go, and we passed in a callback of type.

the first case is for the initial rendering of the api, where the api is being called whereby we are yet to receive any value or response from the api. What do we want it to do? We just want to return that state(soon to be created) & set loading to true(I know we haven't created any instance for that yet). - "INIT_FETCH"

the second case is for the fetched data instance, where we have received a positive response from the api(data). In this situation, we just want to have a value(called data) holding the response/result(called payload). So what we do is that we return the original state, and alter the value of data to be payload(yet, we haven't created any instance for these, we soon will), and since the value of the loading state has been altered, we have to set it back to false - "SUCCESS_FETCH"

third, what if there was an error in the process of fetching and the api couldn't return any data, we want to return the state and alter the error instance set to true and since the value of the loading state has been altered, we have to set it back to false. - "FAIL_FETCH"

now it's possible none of these happens, we just want to have a default case set to the state without altering anything in it

### Next up, we export the Reducer function. - "export default Reducer"

## Let's move on to the index.js(actions)

Basically, what we will be doing here is to both consume the reducer by making use of it with the help of "useReducer", within which we will create the instances we were altering above, and second, we want to make a request to an api with the help of "useEffect". So start by importing those two from "react".

Furthermore, whenever we are making use of useEffect, we need axios to actually carry out the type of request(get, post...), so also import axios from "axios"

Also, since we are consuming the reducer we created earlier on, let's import it as well.

We want to make the "useEffect" and "useReducer" functions globally accessible, so we create a parent function called "useDataApi()". Now there are quite a few numbers of reasons why we are creating the parent function, but the major reason is that we want to be able to use this particular function to call as many API as we want, rather than creating new useEffect and useReducer function for each API calling, we just have one(useDataApi).

But how do we really make that possible? We know that whenever we want to use APIs, about two or more, the only thing that will defer them from each other are the url we will make request to, and the data we get from the request. So, to actually make this useDataApi universally/globally useable, we will pass in these two things that do defer in API calling(url, data) as a callback for the function.

First thing we want to do is to set whatever url we are getting from the function consuming the useDataApi function(useUrl), to a variable(url).

The reducer here in useReducer(Reducer, {...}) is the constant we defined earlier. These names need to match in order to use the reducer we defined. Same with our initial state as we just defined, which we used a few lines back. Name the two constants whatever suits your taste, as long as they match up. "state" represents the intitializations(loading, error...) in our store being passed in and dispatch is sort of an alias for action in our reducer. Notice the data set to "initialData", in the consumer part as in our case, "App.js", we will set the initialData to an empty array, which simply means, in this our initial state, the data is an empty array.

Now to the useEffect section. We made use of async-await and try-catch. So, when the link is been fetched initially, we want to dispatch the action case we created earlier in the reducer(INIT_FETCH). When the API is now been fetched, we want to do a few things, such as receiving and storing the data gotten from the get request, using "await axios.get(url)". Wondering where the url came from? Worry not, it is the url we recieved from the callback function, remember?? Now we are setting the payload to the data of the response(res.data). Note that the "data" in "res.data" has nothing to do with data state in the useReducer(data: initialData). Then when an error occurs, we want to dispatch the action case of "FAIL_FETCH" within the catch block. Remember we set data to payload in the "Reducer", now in our actions file, we are setting that payload to be the response from the API, meaning data state which we created is now the response from API upon fetch request.

Afterwards, outside the "fetchData" function, we want to make useEffect aware that it should use that function for the fetching, we return it(fetchData()). But there's something important we haven't talked about and that is how we frequent or on what basis should the useEffect be rendered. Really, we want it to re-render only when the api/url changes, and only that time alone. So what we have to do is to pass it into the useEffect([url]);

So finally(pheww), after everything, we want to return our state. Why? The state is holding the the initial values of loading, data... and we want to be able to destructure them whenever they are called to be used, as in our "App.js".

## Next up is the App.js(comsumer, I call it)
In this section, we will be applying the useDataApi in the App.js. If you notice, we created the Reducer function and used it in useDataApi, now we are using the useDataApi function in the App.js file.

Remember, in the useDataApi where we returned the state object? Yeah, we will be destructuring the data within it, such as "data, loading...".
Also, remember the callbacks, "initialUrl, initialData"? We will be setting their values here as well. So that's what we have this section
"
  const [{ data, loading, error, pageLimit, totalRecords }] = useDataApi(
    `https://randomuser.me/api/?page=${currentPage}&results=${result}`,
    {
      results: [],
    }
  );
"

Then in our return section, we use the data we got back as response from the API.

# And that's it, we have come to the very end of this documentation. Thanks for reading.
