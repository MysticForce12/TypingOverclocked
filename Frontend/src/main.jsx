// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./helper.css";
import HomeScreen from "./Component/HomePage/HomeScreen.jsx";
import GameScreen from "./Component/GameScreen/GameScreen.jsx";
import QuitConfirm from "./Component/GameScreen/QuitConfirm.jsx";
import CreateGame from "./Component/HomePage/CreateHomeScreen.jsx";
import JoinGame from "./Component/HomePage/JoinHomeScreen.jsx";
import ResultPage from "./Component/Result/ResultPage.jsx";
import WaitingScreen from "./Component/HomePage/WaitingScreen.jsx";
import NotFound from "./Component/HomePage/NotFound.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeScreen />,
		errorElement: <div>404 Not Found</div>,
	},
	{
		path: "/game/:roomId",
		element: <GameScreen />,
	},
	{
		path: "/quitconfirm",
		element: (
			<>
				<GameScreen />
				<QuitConfirm />
			</>
		),
	},
	{
		path: "/creategame/:roomId",
		element: <CreateGame />,
	},
	{
		path: "/joingame",
		element: <JoinGame />,
	},
	{
		path: "/result",
		element: <ResultPage />,
	},
	{
		path: "/:roomId/in-queue",
		element: <WaitingScreen />
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

createRoot(document.getElementById("root")).render(
	// <StrictMode>
		<RouterProvider router={router} />,
	{/* </StrictMode> */}
);
