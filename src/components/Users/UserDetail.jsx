import { useLocation, useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();
  const locatin = useLocation();
  const user = locatin.state;
  const { userId } = useParams();

  return (
    <div className="my-4 border border-3 rounded-3 p-4">
      <div className="d-flex align-items-center  justify-content-end">
        <button
          className="btn btn-danger border"
          onClick={() => navigate("/users")}
        >
          Close
        </button>
      </div>
      <div className="d-flex align-items-center column-gap-5 mt-2">
        <img
          src={user.profile_url}
          alt={user.name}
          className="rounded-4"
          style={{ height: 100, width: 100 }}
        />
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Profile URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.profile_url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
