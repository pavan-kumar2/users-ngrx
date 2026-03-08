import { createAction, createActionGroup, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loadUsers = createAction(
    '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: User[] }>()
)

export const addUser = createAction(
    '[Users] Add Users',
    props<{ user: User }>()
)

export const updateUser = createAction(
    '[Users] Update Users',
    props<{ user: User }>()
)

export const deleteUser = createAction(
    '[Users] Delete Users',
    props<{ id: number }>()
)