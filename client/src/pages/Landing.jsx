import { Logo } from "../components";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info ">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
         Stay on top of your job search with Jobify — a modern, easy-to-use platform built to help you track applications, organize opportunities, and stay focused. Whether you're applying to internships or full-time roles, Jobify lets you create, edit, and manage job listings with ease. Search and filter jobs, monitor your application status, and gain insight with dynamic stats — all from one clean dashboard. Built with the MERN stack, Jobify brings speed, clarity, and structure to your job hunt.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
