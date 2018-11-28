import React, { Component } from "react";
import "./assests/App.css";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store/appStore";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		);
	}
}

export default App;
