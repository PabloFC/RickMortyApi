import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import '../App.css';

function Layout() {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <nav>
        <h3>Protected Routes</h3>

        {auth && (
          <>
            <ul>
              <li>
                <Link to="characters">Characters</Link>
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
