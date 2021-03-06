import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Form from "./Pages/Form/Form";
import Login from "./Pages/Form/Login/Login";
import Home from "./Pages/Home/Home";
import ManageServices from "./Pages/ManageServices/ManageServices";

const App = () => {
  return (
    <div className="body">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route exact path="/form/login">
              <Form>
                <Login></Login>
              </Form>
            </Route>

            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
