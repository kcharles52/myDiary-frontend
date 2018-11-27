import React, { Component } from "react";
import "./assests/App.css";
import AppRoutes from "./routes";
class App extends Component {
	render() {
		return (
			<div className="App">
				<AppRoutes />
			</div>
		);
	}
}

export default App;
