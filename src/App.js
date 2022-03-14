import React from "react";
import "./App.css";
import MainPage from "./pages/main.page";
import TotalProvider from "./context/total.provider";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Gold Rate Calculator</h1>
			</header>
			<main>
				<TotalProvider>
					<MainPage />
				</TotalProvider>
			</main>
		</div>
	);
}

export default App;
