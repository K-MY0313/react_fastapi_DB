import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            employeeid: employeeId,
            name: name,
            department: department,
            position: position,
            birthdate: birthdate,
        };

        try {
            const response = await axios.post('http://localhost:8000/process/', data);
            console.log('Data successfully saved:', response.data);
        } catch (error) {
            console.error('There was an error saving the data!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee ID:</label>
                <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Department:</label>
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div>
                <label>Position:</label>
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div>
                <label>Birthdate:</label>
                <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmployeeForm;
