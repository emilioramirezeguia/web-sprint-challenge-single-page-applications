import React from "react";
import "../App.css";

function Form(props) {
    const { form, handleChange, handleCheckbox, handleSubmit, disabled, errors } = props;

    return (
        <>
            <div className="formDiv">
                <h2>Build your own pizza</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <div style={{ color: "red" }}>{errors.name}</div>
                        <h3>Who should we send this to?</h3>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <h3>How many slices do you want?</h3>
                        <select
                            name="size"
                            value={form.size}
                            onChange={handleChange}
                        >
                            <option value="">Please choose</option>
                            <option value="Family">12 slices (Family)</option>
                            <option value="Couple">8 slices (Couple)</option>
                            <option value="Solo">4 slices (Solo)</option>
                        </select>
                    </div>
                    <div className="formGroup checkboxes">
                        <h3>Would you like some toppings?</h3>
                        <label htmlFor="pepperoni">Pepperoni</label>
                        <input
                            id="pepperoni"
                            name="pepperoni"
                            type="checkbox"
                            checked={form.toppings.pepperoni}
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="peppers">Peppers</label>
                        <input
                            id="peppers"
                            name="peppers"
                            type="checkbox"
                            checked={form.toppings.peppers}
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="mushrooms">Mushrooms</label>
                        <input
                            id="mushrooms"
                            name="mushrooms"
                            type="checkbox"
                            checked={form.toppings.mushrooms}
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="sausage">Sausage</label>
                        <input
                            id="sausage"
                            name="sausage"
                            type="checkbox"
                            checked={form.toppings.sausage}
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="formGroup">
                        <h3>Any special requests?</h3>
                        <textarea
                            name="specialRequests"
                            value={form.specialRequests}
                            onChange={handleChange}
                        />
                    </div>
                    <button disabled={disabled}>Add to order</button>
                </form>
            </div>
        </>
    )
}

export default Form;