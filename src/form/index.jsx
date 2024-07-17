import React, { useState } from 'react';

export default function CreateForm() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    PhoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const [validationMessages,setValidationMessages]=useState({
    userName:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  });

  const [table, setTable] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Destructure form values for easier access 
const{userName,password,confirmPassword,phoneNumber} = form;
 setValidationMessages({
  userName:"",
  password:"",
  confirmPassword:"",
  phoneNumber:""
 });
 if(userName.length<=5){
setValidationMessages(prevState=>({...prevState,userName:"userName must be at least five numbers"}))
 }
 if(!phoneNumber.match(/[9876]\d{9}$/)){
setValidationMessages(prevState=>({...prevState,phoneNumber:"phone number should start with 9,8,7"}))
 }
 if(password!==confirmPassword){
setValidationMessages(prevState=>({...prevState,confirmPassword:"password not match"}))
 }

if(userName.length>5&&phoneNumber.Match(/[9876]\d{9}$/)&&password===confirmPassword){

const newRow = { ...form };
      setTable([...table, newRow]);

      // Clear the form inputs
      setForm({
        userName: "",
        email: "",
        PhoneNumber: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label><br />
        <input type="text" name="userName" value={form.userName} onChange={handleInputChange} /><br />
         <span style={{color:"red"}}>{validationMessages.userName}</span><br/>
        <label>Email</label><br />
        <input type="email" name="email" value={form.email} onChange={handleInputChange} /><br />

        <label>PhoneNumber</label><br />
        <input type="number" name="PhoneNumber" value={form.PhoneNumber} onChange={handleInputChange} /><br />
        <span style={{color:"red"}}>{validationMessages.phoneNumber}</span>
        <label>Password</label><br />
        <input type="password" name="password" value={form.password} onChange={handleInputChange} /><br />

        <label>ConfirmPassword</label><br />
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleInputChange} /><br />
<span style={{color:"red"}}>{validationMessages.confirmPassword}</span>
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <td>{row.userName}</td>
              <td>{row.email}</td>
              <td>{row.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
