import React, { Component } from 'react';
import styles from './UsersList.module.css';
import UsersListItem from './UsersListItem';

const usersDB = [
  {
    id: 1,
    firstName: 'yoshi',
    lastName: 'tuo',
    age: 25,
    imgSrc: 'https://randomuser.me/api/portraits/men/26.jpg',
  },
  {
    id: 2,
    firstName: 'capo',
    lastName: 'dextra',
    age: 35,
    imgSrc: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
];

class UsersList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: usersDB.map(u => ({ ...u, isSelected: false })),
    };
  }

  insertUser = u => (
    <UsersListItem
      key={u.id}
      user={u}
      selectUser={this.selectUser}
      handleDelete={this.handleDelete}
    />
  );

  selectUser = id => {
    const { users } = this.state;
    const updatedUsers = [...users];
    const selectedUserIndex = updatedUsers.findIndex(u => u.id === id);
    updatedUsers[selectedUserIndex].isSelected = !updatedUsers[
      selectedUserIndex
    ].isSelected;
    this.setState({ users: updatedUsers });
  };

  handleDelete = id => {
    const { users } = this.state;
    const copiedUsers = [...users];
    const updatedUsers = copiedUsers.filter(u => u.id !== id);
    this.setState({ users: updatedUsers });
  };

  render () {
    const { users } = this.state;
    return <ul className={styles.wrapper}>{users.map(this.insertUser)}</ul>;
  }
}

export default UsersList;
