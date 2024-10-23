import React from "react"
import Home from "../pages/Home"
import Auth from "../pages/Auth"
import Landing from "../pages/Landing"
import Error from "../pages/Error"

export type Route = {
	path: string
	element: React.ReactNode
}

export const routes: Route[] = [
	{
		path: "/",
		element: Landing(),
	},
	{
		path: "/login",
		element: Auth(),
	},
	{
		path: "/home",
		element: Home(),
	},
	{
		path: "*",
		element: Error(),
	},
]
