// store/reducers/contatosSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
  nomeCompleto: string
  email: string
  telefone: string
}

interface ContatosState {
  contatos: Contato[]
  selectedContactIndex: number
}

const initialState: ContatosState = {
  contatos: [],
  selectedContactIndex: -1
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state.contatos.splice(index, 1)
    },
    setContatos: (state, action: PayloadAction<Contato[]>) => {
      state.contatos = action.payload
    },
    alterarContato: (
      state,
      action: PayloadAction<{ index: number; contato: Contato }>
    ) => {
      const { index, contato } = action.payload
      console.log('O index é : ' + index)
      if (state.contatos[index]) {
        state.contatos[index] = contato
      }
    }
  }
})

export const { adicionarContato, removerContato, setContatos, alterarContato } =
  contatosSlice.actions

export default contatosSlice.reducer
