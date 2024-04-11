import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import '../App.css';

function Layout() {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <nav>
        <h1>Protected Routes</h1>

        {auth && (
          <>
            <ul>
              <li>
                <Link to="/">Characters</Link>
              </li>
              <button onClick={logout}>Logout</button>
            </ul>
          </>
        )}
      </nav>
      <main className="app">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
