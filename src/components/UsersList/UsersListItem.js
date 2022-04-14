import React from 'react';
import styles from './UsersList.module.css';
import TrashCanOutlineIcon from 'mdi-react/TrashCanOutlineIcon';

function UsersListItem (props) {
  const {
    user: { firstName, lastName, age, imgSrc, id, isSelected },
    selectUser,
    handleDelete,
  } = props;
  const selectedUserStyle = {
    outline: '1px solid purple',
  };
  return (
    <li
      onClick={() => selectUser(id)}
      className={styles.userBlock}
      style={isSelected ? selectedUserStyle : undefined}
    >
      <img className={styles.userImage} src={imgSrc} alt={firstName} />
      <p className={styles.userInfo}>
        {firstName} {lastName} {age}
      </p>
      <button
        className={styles.deleteUserButton}
        onClickCapture={() => handleDelete(id)}
      >
        <TrashCanOutlineIcon />
      </button>
    </li>
  );
}

export default UsersListItem;
