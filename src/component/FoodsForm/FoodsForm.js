import React from 'react';

const initialState = {
    image:
        'https://i.pinimg.com/originals/3b/5f/3f/3b5f3fe6d684d7cb19baa41820a66981.jpg',
    calories: 0,
    quantity: 0,
    name: '',
};

function FoodsForm({ onSubmit }) {
    const [state, setState] = React.useState(initialState);

    const handleSumbit = (event) => {
        event.preventDefault()
        onSubmit(state)
        setState(initialState)
    }
    const handleChange = ({ target }) =>
        setState({ ...state, [target.name]: target.value });

    return (
        <form className="form" onSubmit={handleSumbit}>
            <label className="label" htmlFor="name">
                Name:
      </label>
            <input
                className="input"
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
            />
            <label className="label" htmlFor="calories">
                Calories:
      </label>
            <input
                className="input"
                type="number"
                name="calories"
                value={state.calories}
                onChange={handleChange}
            />
            <label className="label" htmlFor="quantity">
                Quantity:
      </label>
            <input
                className="input"
                type="number"
                name="quantity"
                value={state.quantity}
                onChange={handleChange}
            />
            <button className="button" type="submit">Add Food</button>
        </form>
    );
}

export default FoodsForm;

// state = { calories: 0, quantity: 0, name: "" }

// { ...state } -->
// { calories: 0, quantity: 0, name: "" } -->
// { calories: 0, quantity: 0, name: "", calores: 1 } -->
// {  quantity: 0, name: "", calores: 1 }

// { ...state } -->
// { calories: 0, quantity: 0, name: "" } -->
// { calores: 1, calories: 0, quantity: 0, name: "" } -->
// {  quantity: 0, name: "", calores: 0 }
