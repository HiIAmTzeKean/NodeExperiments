import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Point from "./pages/Point/point"

const Layout = () => {
	return (
		<div className="app">
			<Navbar/>
			<Outlet/>
			<Footer/>
		</div>
	)
}
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
			{
				path: "/point",
				element: <Point/>,
			},
			{
				path: "/updateSchedule",
				element: <span>User points</span>,
			}
		]
	}
])

function App() {
	return (
	<div className="App">
		<RouterProvider router={router}/>
	</div>
	);
}

export default App;
