import { useState } from 'react';
import InputFields from './components/inputFields';
import Filter from './components/filter';
import DisplayTable from './components/displayTable';
import './App.css';

function App() {
  const [filterOption, setFilterOption] = useState('All')

  const [fieldInputs, setFieldInputs] = useState({
    description: '',
    amount: '',
    category: '',
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFieldInputs((prevValues) => {
      return {...prevValues, [name]: value}
    })

  }

  const [expenseReport, setExpenseReport] = useState([])

  const addItem = () => {
    setExpenseReport((prevValues) => {
      return (
        [...prevValues, fieldInputs]
      )
    })
    setFieldInputs({
      description:'',
      amount: '',
      category: '',
    })
  }

  const handleDelete = (id) => {
    setExpenseReport((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <InputFields addButton={addItem} changeHandler={handleChange} data={fieldInputs} />
      <Filter data={expenseReport} setSelectedOption={setFilterOption} />
      <DisplayTable data={expenseReport} deleteStuff={handleDelete} filterOption={filterOption} />
    </div>
  );
}

export default App;
