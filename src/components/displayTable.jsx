import React from 'react'

const DisplayTable = (props) => {

    const { data, deleteStuff, filterOption } = props

    const filteredData = filterOption === 'All' ? data : data.filter(item => item.category === filterOption)

  let totalAmount = 0;

    filteredData.map((item) => {
      return totalAmount = totalAmount + parseInt(item.amount);
    })

 return (
    <div className="tableData">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            
          </tr>
        </thead>
        <tbody>
            {filteredData.map((item, index) => (
                <tr key={index} id={index}>
                    <td>{item.description}</td>
                    <td>{"₦" + Intl.NumberFormat("en-US").format(item.amount)}</td>
                    <td>{item.category}</td>
                    <td>
                        <button onClick={() => {deleteStuff(index)}}>Delete</button>
                    </td>
                </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{"₦" + Intl.NumberFormat("en-US").format(totalAmount)}</td>
            </tr>
        </tbody>
      </table>
    </div>
 )
}

export default DisplayTable