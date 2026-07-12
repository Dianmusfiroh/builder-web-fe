import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();
  const isDarkNavbar = pathname !== '/';
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <>
      {!isAuthPage && !isAdminPage && (
        <div className="container absolute -top-4 left-2/4 z-10 mx-auto -translate-x-2/4 p-3">
          <Navbar routes={routes} isDarkText={isDarkNavbar} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
