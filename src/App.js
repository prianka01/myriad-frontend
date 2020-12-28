import React from "react";
// import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
// import { ButtonGroup } from "react-bootstrap";
import Home from "./pages/home";
import Contact from "./pages/contact/index";
// import Profile from "./pages/profile";
import Diary from "./pages/diary";
import Photos from "./pages/photos/index";
import Events from "./pages/events";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DiaryIsClicked: false,
      ContactIsClicked: false,
      PhotosIsClicked: false,
      EventsIsClicked: false,
    };
  }
  onClickDiary = () => {
    this.setState({
      DiaryIsClicked: true,
      ContactIsClicked: false,
      PhotosIsClicked: false,
      EventsIsClicked: false,
    });
    this.forceUpdate();
  };
  onClickContact = () => {
    this.setState({
      DiaryIsClicked: false,
      ContactIsClicked: true,
      PhotosIsClicked: false,
      EventsIsClicked: false,
    });
    this.forceUpdate();
  };
  onClickPhotos = () => {
    this.setState({
      DiaryIsClicked: false,
      ContactIsClicked: false,
      PhotosIsClicked: true,
      EventsIsClicked: false,
    });
    this.forceUpdate();
  };
  onClickEvents = () => {
    this.setState({
      DiaryIsClicked: false,
      ContactIsClicked: false,
      PhotosIsClicked: false,
      EventsIsClicked: true,
    });
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <div className="app">
          <h1 id="logo">MYRIAD</h1>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
              <a class="navbar-brand" href="./index.js">MYRIAD</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <button class="nav-link active text-info bg-light border-0">
                      HOME <span class="sr-only">(current)</span>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link text-info bg-light border-0"
                      onClick={() => this.onClickDiary()}
                    >
                      DIARY
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link text-info bg-light border-0"
                      onClick={() => this.onClickContact()}
                    >
                      CONTACT
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link text-info bg-light border-0"
                      onClick={() => this.onClickPhotos()}
                    >
                      PHOTOS
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link text-info bg-light border-0 "
                      onClick={() => this.onClickEvents()}
                    >
                      EVENTS
                    </button>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-info"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="../"
                    >
                      LOGOUT
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <button class="dropdown-item">Action</button>
                      <a class="dropdown-item" href>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href>Something else here</a>
                    </div>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
          <div>
            <p>
              Hello,THis is MYRIAD ,a page where you can create notes like a
              diary,photos and many more.
            </p>
          </div>
          <div>
            {this.state.DiaryIsClicked === true && <Diary />}
            {this.state.ContactIsClicked === true && <Contact />}
            {this.state.PhotosIsClicked === true && <Photos />}
            {this.state.EventsIsClicked === true && <Events />}
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
