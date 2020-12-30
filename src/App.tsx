import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact/index";
import Diary from "./pages/diary";
import Photos from "./pages/photos/index";
import Events from "./pages/events";
const App = () => {
	return (
		<div>
			<div className="app">
				<h1 id="logo">MYRIAD</h1>
				<HashRouter>
					<div>
						<nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
							<a className="navbar-brand" href="./index.js">
								MYRIAD
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav mr-auto">
									<li className="nav-item active">
										<NavLink
											className="nav-link text-info bg-light border-0"
											to="/"
										>
											HOME
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link text-info bg-light border-0"
											to="/diary"
										>
											DIARY
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link text-info bg-light border-0"
											to="/contact"
										>
											CONTACT
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link text-info bg-light border-0"
											to="/photos"
										>
											PHOTOS
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link text-info bg-light border-0"
											to="/events"
										>
											EVENTS
										</NavLink>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle text-info"
											id="navbarDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											href="../"
										>
											LOGOUT
										</a>
										<div
											className="dropdown-menu"
											aria-labelledby="navbarDropdown"
										>
											<button className="dropdown-item">Action</button>
											<a className="dropdown-item" href="null">
												Another action
											</a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="null">
												Something else here
											</a>
										</div>
									</li>
								</ul>
								<form className="form-inline my-2 my-lg-0">
									<input
										className="form-control mr-sm-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
									></input>
									<button
										className="btn btn-outline-success my-2 my-sm-0"
										type="submit"
									>
										Search
									</button>
								</form>
							</div>
						</nav>
					</div>
					<div>
						<Route path="/diary" component={Diary} />
						<Route path="/contact" component={Contact} />
						<Route path="/photos" component={Photos} />
						<Route path="/events" component={Events} />
						<Home />
					</div>
				</HashRouter>
				<div>
					<p>
						Hello,THis is MYRIAD ,a page where you can create notes like a
						diary,photos and many more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
