import React from "react";
import RepositoryList from "./components/RepositoryList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<RepositoryList />
	</Provider>
);

export default App;
