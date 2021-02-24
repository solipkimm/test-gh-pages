import React, {useState} from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [accountType, setAccountType] = useState('Student')

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('The Form Was Submitted: ' + 
        JSON.stringify(username) + 
        ' ' + 
        JSON.stringify(accountType) )
        setUsername("")
        setAccountType('Student')
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          User Name: 
          <input type="text" name="username" value={username} onChange={onUsernameChange} />
        </label><br />
        <label>
          Accout Type: 
          <select name="accountType" value={accountType} onChange={onAccountTypeChange}>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Admin">Admin</option>
          </select>
        </label><br />
        <button type="submit">Submit</button>
    </form>
  )
}

export default App;
