import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeegetForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [data, setData] = useState(null);

   

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
         <Link to="/">
         最初の画面
        </Link>
        <br />
        <Link to="/post">
        　入力画面
        </Link>
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

export default EmployeegetForm;
