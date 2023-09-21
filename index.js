
// const redux = require('redux')
// const createStore = redux.createStore

// //creating action
// const buy_cake = "buy_cake"

// function buycake() {
//     return {
//         type: buy_cake,
//         info: "first redux action"
//     }
// }

// //create reducer
// const initialState = {
//     noOfCakes: 10,
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case buy_cake: return {
//             ...state,
//             noOfCakes: state.noOfCakes - 1,
//         }

//         default: return state

//     }
// }

// //creating store
// const store = createStore(reducer)
// console.log('initial state', store.getState()) //get state to get a state

// const unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()))//listener using subscribe
// store.dispatch(buycake()) // dispatch to implement action

// unsubscribe()


//creating action
const redux = require('redux');
const createStore = redux.createStore;


const buy_cake = "buy a cake"


function buyCake() {
    return{
        type: buy_cake,
        info: "buy a cake action"
    }
}

//creating a reducer and initial state
const initialState = {
    numberOfcakes: 10
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_cake: return {
            ...state,
            numberOfcakes: state.numberOfcakes - 1
        }
        default: return state
    }
}


//creating store

const store = createStore(reducer)  //creating store
console.log("initial state", store.getState())  //getting state

const unsubscribe = store.subscribe(()=>{console.log('updated state', store.getState())})  //listener 

store.dispatch(buyCake()) // action event
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


unsubscribe() // unsubscribing from the lister end after dispatch








