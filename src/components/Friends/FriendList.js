import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';



const FriendList = ({ friends }) => {
    return (
        <section className={style.heads}>
        <h2>Friends List</h2>
        <ul className={style.friend}>
            {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className={style.item} >
                <span className={isOnline ? style.online : style.offline}></span>
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
            </li>))}
            </ul>
        </section>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };