import {useReducer} from 'react';

export default function ReducerPractise() {
    const reducer = (state, action) => {
        if (action.type === 'buy_ingredients') {
            const newMoney = (state.money - parseFloat(Math.random() * 100)).toFixed(2);
            return { money: parseFloat(newMoney) };
        }
        if (action.type === 'sell_a_meal') {
            const newMoney = (state.money + parseFloat(Math.random() * 100)).toFixed(2);
            return { money: parseFloat(newMoney) };
        }
        if (action.type === 'celebrity_visit') {
            const newMoney = (state.money + parseFloat(Math.random() * 10000)).toFixed(2);
            return { money: parseFloat(newMoney) };
        }
    };
    

    const initialState = {money: 1200}
    const [state, dispatch]  = useReducer(reducer, initialState)


    return (
        <div className='App'>
            <h1>useReducer practise</h1>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shop for stock</button>
                <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
                <button onClick={() => dispatch({type: 'celebrity_visit'})}>celebrity visit</button>
            </div>
        </div>
    )

}