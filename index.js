
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
//creating action
const buy_cake = "buy_cake"
const buy_iceCream = "buy_iceCream"

function buycake() {
    return {
        type: buy_cake,
        info: "first redux action"
    }
}

function iceCream() {
    return {
        type: 'buy_iceCream',
        info: "second redux action"
    }
}

//create reducer
// const initialState = {
//     noOfCakes: 10,
//     noOfIceCream: 20,
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case buy_cake: return {
//             ...state,
//             noOfCakes: state.noOfCakes - 1,
//         }
//         case buy_iceCream: return {
//             ...state,
//             noOfIceCream: state.noOfIceCream - 1,
//         }

//         default: return state

//     }
// }

//creating store
// const store = createStore(reducer)
// console.log('initial state', store.getState()) //get state to get a state

// const unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()))//listener using subscribe
// store.dispatch(buycake()) // dispatch to implement action
// store.dispatch(iceCream())

// unsubscribe()


// PART 2 Creating Multiple Reducers
//creating multiple reducer need to create multiple initial state

const CakeInitialState = {
    noOfcakes: 10
}
const buyIceCreamInitialState = {
    noOfIceCream: 20
}

const cakeReducer = (state = CakeInitialState, action) => {
    switch (action.type) {
        case buy_cake: return {
            ...state,
            noOfcakes: state.noOfcakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = buyIceCreamInitialState, action) => {

    switch (action.type) {
        case buy_iceCream: return {
            ...state,
            noOfIceCream: state.noOfIceCream - 1
        }
        default: return state
    }
}


const megareducer = combineReducers({
    cake: cakeReducer,
    Ice: iceCreamReducer
})


const store = createStore(megareducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => { console.log("updated state", store.getState()) })
store.dispatch(buycake())
store.dispatch(iceCream())

unsubscribe()

