import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled.button`
    height: 40px;
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${variaveis.branco};
    box-shadow: 3px 3px 20px 1px ${variaveis.cinza};
    background: linear-gradient(
      180deg,
      ${variaveis.pretoTemaEscuro},
      ${variaveis.pretoTemaClaro}
    );

    &:hover {
      background: linear-gradient(
        180deg,
        ${variaveis.pretoTemaClaro},
        ${variaveis.pretoTemaEscuro}
      );
    }
  }
`
