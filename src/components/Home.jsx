import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="m-3 vh-100 d-flex text-center flex-column justify-content-center align-items-center">
      <h2>Simple Project</h2>
      <p className="my-3 h5 w-50 ">
        This is a simple project that you can add new user, edit user, delete
        user and view the detail of that user.
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/users")}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
