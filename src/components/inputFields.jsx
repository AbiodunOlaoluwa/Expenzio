import React from 'react'

const inputFields = () => {
  return (
    <div className="descriptionField">
        <label htmlFor="descriptionInput" className="descriptionLabel">
            Description
        </label>
        <input type="text" id="descriptionInput" />
    </div>
  )
}

export default inputFields;