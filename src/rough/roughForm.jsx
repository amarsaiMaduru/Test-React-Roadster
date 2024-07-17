import React, { useState } from 'react';

function RegisterForm() {
    const [form, setForm] = useState({
        userName: "",
        Email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });
    const [table, setTable] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRow = { ...form };
        setTable([...table, newRow]);
        setForm({
            userName: "",
            Email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>userName</label><br></br>
                <input type="text" name="userName" placeholder="userName" value={form.userName} onChange={handleInputChange}/><br></br>
                <label>Email</label><br></br>
                <input type="email" name="Email" placeholder="Email" value={form.Email} onChange={handleInputChange}/><br></br>
                <label>phoneNumber</label><br></br>
                <input type="" name="phoneNumber"  placeholder="enter the phoneNumber" value={form.phoneNumber} onChange={handleInputChange}/><br></br>
                <label>password</label><br></br>
                <input type="password" name="password" placeholder="password" value={form.password} onChange={handleInputChange}/><br></br>
                <label>confirmPassword</label><br></br>
                <input type="password" name="confirmPassword" placeholder="confirmPassword" value={form.confirmPassword} onChange={handleInputChange}/><br></br>
                <button type="submit">submit</button>
            </form>
l
            <table>
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>Email</th>
                        <th>phoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((row, index) => (
                        <tr key={index}>
                            <td>{row.userName}</td>
                            <td>{row.Email}</td>
                            <td>{row.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RegisterForm 