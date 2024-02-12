import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  const [editUser, setEditUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const url = 'https://users-crud.academlo.tech/';
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

 useEffect(() => {
    getUsers('/users/');
 }, []);
 
const handleOpen = () => {
  setIsOpen(true);

}

  return (
   <div className='header'>
      <h1>Users</h1>
      <div className='btn'>
      <button className='new_btn' onClick={handleOpen}>+ Crear nuevo usuario</button>
      </div>
      <div className='card_users'>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      </div>
      <div className='Users'>
        {
          users?.map(user => (
            <CardUser 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))
        }
      </div>
   </div>
  )
}

export default App
