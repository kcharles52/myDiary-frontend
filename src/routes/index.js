import React from "react";
import Home from "../componets/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact strict />
				{/* Add your routes here */}
			</Switch>
		</BrowserRouter>
	);
}
