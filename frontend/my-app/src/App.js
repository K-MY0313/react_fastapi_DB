import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [data, setData] = useState(null);

    const handlePost = async (e) => {
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

    const handleGet = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/departments/${department}`);
            console.log('Data successfully retrieved:', response.data);
            setData(response.data);
        } catch (error) {
            console.error('There was an error retrieving the data!', error);
        }
    };

    return (
        <>
            <form onSubmit={handlePost}>
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
            <form onSubmit={handleGet}>
                <div>
                    <label>Department:</label>
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <button type="submit">Get Employee Data</button>
            </form>
            {data && (
                <div>
                    登録完了しました: <br />
                    {data.map((employee) => (
                        <div key={employee.employee_id}>
                            {employee.name} ({employee.employee_id}), {employee.department}, {employee.position}, {employee.birth_date}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default EmployeeForm;
