// store.ts

import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatosSlice'
import { Contatos } from '../pages/Cadastro/Contatos'

const initialState = {
  contatos: {
    contatos: Contatos,
    selectedContactIndex: -1 // Defina o índice inicial como -1 (nenhum contato selecionado)
  }
}

const store = configureStore({
  reducer: {
    contatos: contatosReducer
  },
  preloadedState: initialState // Use o initialState aqui
})

export type RootState = ReturnType<typeof store.getState>
export default store
