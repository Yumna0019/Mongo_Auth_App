// import {  useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: '', email: '' });

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get('http://localhost:3001/api/users');
//       setUsers(res.data);
//     } catch (err) {
//       console.error('Error fetching users:', err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/api/users', form);
//       setForm({ name: '', email: '' });
//       fetchUsers();
//     } catch (err) {
//       console.error('Error submitting form:', err.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">Add User</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="input"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="input"
//         />
//         <button type="submit" className="button">Submit</button>
//       </form>

//       <h3 className="sub-heading">User Emails</h3>
//       <ul className="list">
//         {users.map((user, idx) => (
//           <li key={idx} className="list-item">{user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://mongo-auth-app-al5r.vercel.app/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mongo-auth-app-al5r.vercel.app/api/users', form);
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
        {users.map((user) => (
          <li key={user._id} className="list-item">{user.email}</li> // Use user._id if available
        ))}
      </ul>
    </div>
  );
}

export default App;
