import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/slices/usersSlice';

export const UsersList = ({ users, isFetching, error, loadUsers }) => {
  useEffect(() => {
    loadUsers(1);
  }, []);

  return (
    <>
      {error && <div>ERROR</div>}
      {isFetching && <div>Loading...</div>}
      {!isFetching && !error && (
        <ul>
          {users.map((u, i) => (
            <li key={i}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({ usersList }) => usersList;

const mapDispatchToProps = dispatch => ({
  loadUsers: page => dispatch(getUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
