const { useState, useEffect } = require("react");

function Library() {
    const [employee, setemployee] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getEmployees')
        .then(response => response.json())
        .then(data => setemployee(data.data))
        .catch(err => console.log(err)); // This is the correct way to catch errors
    }, []);
    

    return(
        <div>
        <h1>Employee Details</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((item, idx) => (
                    <tr key = {idx}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    ) 
}

export default Library;