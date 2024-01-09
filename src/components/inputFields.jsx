import React from "react";

function InputFields(props) {

  const { addButton, changeHandler, data } = props

  return (
    <div className="inputsContainer">
      <div className="inputs">
        <div className="descriptionField">
          <label htmlFor="descriptionInput" className="descriptionLabel">
            Description
          </label>
          <input name="description" onChange={changeHandler} type="text" id="descriptionInput" value={data.description} />
        </div>
        <div className="amountField">
          <label htmlFor="amountInput" className="amountLabel">
            Amount
          </label>
          <input name="amount" onChange={changeHandler} type="number" id="amountInput" value={data.amount} />
        </div>
        <div className="categoryField">
          <label htmlFor="categoryInput" className="categoryLabel">
            Category
          </label>
          <input name="category" onChange={changeHandler} type="text" id="categoryInput" value={data.category} />
        </div>
        <div className="sbtnContainer">
          <div className="submitButton">
            <button className="submitButton" onClick={addButton} type="submit">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputFields;