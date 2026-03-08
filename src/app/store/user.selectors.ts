import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "src/app/store/user.reducer";

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
    selectUserState,
    state => state.users
)

