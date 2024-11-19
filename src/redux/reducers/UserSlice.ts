import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserDetailsProps } from "../types/UseTypes"
import { fetchUserDetails } from "../action/UserAction"

interface UserProps {
    userDetails: UserDetailsProps | null
    loading: boolean
    signInButtonLoading: boolean
}

const initialState: UserProps = {
    userDetails: null,
    loading: false,
    signInButtonLoading: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        patchState(state,
            action: PayloadAction<Partial<UserProps>>) {
            return { ...state, ...action.payload }
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchUserDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
            state.userDetails = payload.userDetails
            state.loading = false
        })
        builder.addCase(fetchUserDetails.rejected, state => {
            state.loading = false
        })
    }
})

export const userAction = userSlice.actions
export default userSlice.reducer