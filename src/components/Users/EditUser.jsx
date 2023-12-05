import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const updateUser = location.state;

  const [user, setUser] = useState({ name: "", email: "", profile_url: "" });

  useEffect(() => {
    setUser({
      name: updateUser.name,
      email: updateUser.email,
      profile_url: updateUser.profile_url,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preUser) => ({ ...preUser, [name]: value }));
  };

  const editUser = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/users/${updateUser.id}`, { ...user });
    navigate("/users");
  };

  return (
    <div className="p-3 row">
      <div className="col-12 col-md-10 col-lg-6  mx-auto">
        <form
          method="post"
          className="w-md-75 mx-auto"
          autoComplete="off"
          onSubmit={editUser}
        >
          <legend className="text-center my-3 fw-bold">Edit User</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Username"
            />
            <label htmlFor="name">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="profile_url"
              className="form-control"
              name="profile_url"
              id="profile_url"
              value={user.profile_url}
              onChange={handleChange}
              placeholder="Profile URL"
            />
            <label htmlFor="profile_url">Email address</label>
          </div>
          <div className="d-flex gap-4">
            <button
              type="button"
              onClick={() => navigate("/users")}
              className="btn w-50 btn-primary"
            >
              Cancel
            </button>
            <button type="submit" className="btn w-50 btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
