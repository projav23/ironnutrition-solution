import React from 'react';

function FoodBox({ name, image, calories, quantity, onClick }) {
    const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
    const handleClick = () => {
        onClick({ name, calories, quantity: currentQuantity });
    };
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{name}</strong> <br />
                            <small>{calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={currentQuantity}
                                onChange={({ target }) => setCurrentQuantity(target.value)}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={handleClick}>
                                +
              </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default FoodBox;
