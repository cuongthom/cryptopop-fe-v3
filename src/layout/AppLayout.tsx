import {Route, Routes} from "react-router-dom";
import appRoutes from "../routes";
import Header from "../components/Header.tsx";


const AppLayout = () => {
  return (
    <div>
        <Header/>
      <Routes>
        {Object.values(appRoutes).map(({path, component}) => (
          <Route key={path} path={path} element={component}/>
        ))}
      </Routes>
    </div>
  );
};

export default AppLayout;
