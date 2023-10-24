const FetchingDeDatos = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={users.id}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingDeDatos;
