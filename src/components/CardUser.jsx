import React from 'react';
import './styles/cardUser.css';



const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);

    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

  return (
    <article className='data'>
        <div className='user_card'>
        <h3 className='user_name'>{user.first_name} {user.last_name}</h3>
        <ul>
            <li><span className='info'>EMAIL: </span>
            <br></br>
            <span>{user.email}</span></li>
            <li><span className='info'>BIRTHDAY: </span>
            <br></br>
            <span><ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>

        </ul>
        <button className="icon_trash" onClick={handleDelete}><ion-icon name="trash"></ion-icon></button>
        <button  className="icon_edit" onClick={handleEdit}><ion-icon name="pencil"></ion-icon></button>
        </div>
    </article>
  )
}

export default CardUser