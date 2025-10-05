import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    major: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddStudent = () => {
    if (formData.name && formData.age && formData.major) {
      setStudents(prev => [...prev, { ...formData, id: Date.now() }]);
      setFormData({ name: '', age: '', major: '' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Information System</h1>
        <p className="subtitle">Developed By: 101533701 || Mehrad Bayat || DevOps</p>

        <div className="form-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
            />
          </div>

          <div className="form-group">
            <label>Major:</label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
              placeholder="Enter major"
            />
          </div>

          <button className="add-button" onClick={handleAddStudent}>
            Add Student
          </button>
        </div>

        <div className="student-list">
          <h2>Student List</h2>
          {students.length === 0 ? (
            <p className="no-students">No students added yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Major</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.major}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
