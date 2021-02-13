import React from "react"

function TodayFoods({ todayFoods, onClick }) {
    const totalCalories = todayFoods.reduce((acc, food) => (food.quantity * food.calories) + acc, 0)

    return (
        <div className="container">
            <h2 className="title">Todays Food</h2>
            <h3>Total Calories: {totalCalories}</h3>
            {todayFoods.map(food => (
                <div className="box">
                    <p>{food.name}</p>
                    <p>{food.calories * food.quantity}</p>
                    <p>{food.quantity}</p>
                    <button className="button" onClick={() => onClick(food.name)}>remove</button>
                </div>
            ))}
        </div>

    )
}

export default TodayFoods