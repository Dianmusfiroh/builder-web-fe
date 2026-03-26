import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();
  const isDarkNavbar = pathname !== '/';

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mb-24 mx-auto -translate-x-2/4 p-4">
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
