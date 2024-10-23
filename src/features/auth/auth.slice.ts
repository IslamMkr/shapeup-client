import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserInfos {
	userId: string
	email: string
	firstname: string
	lastname: string
	sexe: string
	birthDate: Date
	age: number
	weight: number
	height: number
}

interface AuthState {
	isAuthenticated: boolean
	userInfos?: UserInfos
	token?: string
}

const initialState: AuthState = {
	isAuthenticated: false,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.isAuthenticated = false
			state.userInfos = undefined
			state.token = undefined
		},

		login(state, action: PayloadAction<string>) {
			state.isAuthenticated = true
			state.token = action.payload
		},

		setUserInfos(state, action: PayloadAction<UserInfos>) {
			state.userInfos = action.payload
		},
	},
})

export const { logout, login, setUserInfos } = authSlice.actions
export default authSlice.reducer
