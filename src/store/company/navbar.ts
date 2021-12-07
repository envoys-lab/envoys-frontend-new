import { createAction, createReducer } from '@reduxjs/toolkit'

const initalState: string[][] = []

export const navAddAction = createAction<string[][]>('nav/add')
export const navClearAction = createAction<string[][]>('nav/clear')

const navbarReducer = createReducer(initalState, (builder) => {
  builder.addCase(navAddAction, (state, action) => {
    action.payload.map((act) => {
      console.log('add', act)
      state.push(act)
    })
  })

  builder.addCase(navClearAction, (state, action) => {
    console.log('clear')
    return []
  })
})

export default navbarReducer
