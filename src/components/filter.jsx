import React from 'react'

const Filter = (props) => {

    const { data, setSelectedOption } = props

    const categories = [...new Set(data.map(item => item.category))]

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="filterContainer">
            <select id="filterDropdown" onChange={handleOptionChange}>
                <option key='all' value="All Categories">All Categories</option>
                {
                    categories.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Filter