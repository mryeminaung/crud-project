import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useState(() => {
    axios.get("http://localhost:8000/users").then((res) => {
      setUsers([...res.data]);
    });
  }, [users]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="px-3">
      <div className="d-flex align-items-center justify-content-between my-4">
        <h2 className="text-center">User Lists</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/create-user")}
        >
          Add User
        </button>
      </div>
      <div className="d-flex align-items-center gap-2 justify-content-end">
        <button className="btn btn-primary">Prev</button>
        <button className="btn btn-primary">Next</button>
      </div>
      {users && users.length ? (
        <table className="table overflow-auto  ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Username</th>
              <th scope="col" className="d-none d-md-block">
                Email
              </th>
              <th scope="col" className="text-center ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="align-middle" key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td scope="col" className="">
                    <img
                      src={user.profile_url}
                      alt={user.name}
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </td>
                  <td scope="col" className="text-capitalize">
                    {user.name}
                  </td>
                  <td scope="col">{user.email}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                          navigate(`/users/${user.id}`, { state: user })
                        }
                      >
                        View
                      </button>
                      <div className="d-none d-md-flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            navigate("/edit-user", { state: user })
                          }
                          className="btn btn-warning"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-dark" role="alert">
          Click <b>Add User</b> to add users
        </div>
      )}
    </div>
  );
};

export default Users;
