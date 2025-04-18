// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: '', email: '' });

//   const fetchUsers = async () => {
//     const res = await axios.get('http://localhost:3001/api/users');  // Local backend URL
//     setUsers(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:3001/api/users', form);  // Local backend URL
//     setForm({ name: '', email: '' });
//     fetchUsers();
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Add User</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <h3>User Emails</h3>
//       <ul>
//         {users.map((user, idx) => (
//           <li key={idx}>{user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



import {  useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/users', form);
      setForm({ name: '', email: '' });
      fetchUsers();
    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Add User</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
        />
        <button type="submit" className="button">Submit</button>
      </form>

      <h3 className="sub-heading">User Emails</h3>
      <ul className="list">
        {users.map((user, idx) => (
          <li key={idx} className="list-item">{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
