import './App.css';
import Users from "./components/users/Users";
function App() {
  const aboutUsers = [
    {
      name: 'Mike',
      age: 22,
      position: 'student'
    },
    {
      name: 'Alex',
      age: 14,
      position: 'schoolboy'
    },
    {
      name: 'Liza',
      age: 49,
      position: 'nurse'
    },
    {
      name: 'James',
      age: 59,
      position: 'pilot'
    },
    {
      name: 'Sasha',
      age: 18,
      position: 'student'
    },
    {
      name: 'Alice',
      age: 35,
      position: 'teacher'
    },
    {
      name: 'Mikkey',
      age: 25,
      position: 'security'
    },
    {
      name: 'Milana',
      age: 99,
      position: 'police'
    }
  ]

  return (
   <Users aboutUsers = {aboutUsers}/>
  );
}

export default App;
