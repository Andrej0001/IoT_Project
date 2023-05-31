import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import useWebSocket from "./hooks/useWebSocket";
import "./index.css";
import AuthorisationComponent from "./components/authorisationComponent/AuthorisationComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Použití funkce

const App = () => {
  const message = useWebSocket("wss://iot-server-unicorn.vercel.app/");
  // const generatedData = generateData();
  // console.log(generatedData);
  // const jsonData = JSON.stringify(generatedData, null, 2);
  return (
    <div>
      <div className="toast">
        <ToastContainer
          closeButton={true}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={"colored"}
        />
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/registration"
          element={<RegistrationPage></RegistrationPage>}
        ></Route>
        <Route
          path="/admin"
          element={
            <AuthorisationComponent>
              <AdminPage></AdminPage>
            </AuthorisationComponent>
          }
        ></Route>
        <Route
          path="/"
          element={
            <AuthorisationComponent>
              <MainPage message={message}></MainPage>
            </AuthorisationComponent>
          }
        >
          {" "}
          <Route path="*" element={<h1>Page not found...</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
