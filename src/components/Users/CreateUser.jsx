import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "", profile_url: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preUser) => ({ ...preUser, [name]: value }));
  };

  const createUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/users", { ...user });
    navigate("/users");
  };

  return (
    <div className="p-3 row">
      <div className="col-12 col-md-10 col-lg-6  mx-auto">
        <form
          method="post"
          className="mx-auto"
          autoComplete="off"
          onSubmit={createUser}
        >
          <legend className="text-center my-3 fw-bold">Add New User</legend>
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
              type="url"
              className="form-control"
              name="profile_url"
              id="profile_url"
              value={user.profile_url}
              onChange={handleChange}
              placeholder="Profile URL"
            />
            <label htmlFor="profile_url">Enter profile url</label>
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
