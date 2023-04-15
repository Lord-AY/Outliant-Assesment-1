import { NavLink } from "react-router-dom";

const NavLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="z-[100] nav">
        <div className="logo">LOGO</div>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
        <div className="action">
          <button className="btn btn-primary">Call to Action</button>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default NavLayout;
