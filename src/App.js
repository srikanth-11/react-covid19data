import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";
import Dashboard from "./dashboard/dashboard";
import Card from "./card/card";
import Reports from "./report";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>

            <div class="container-fluid">
              <Dashboard></Dashboard>

              <Switch>
                <Route path="/reports" component={Reports} />
                <Route path="" component={Card} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
