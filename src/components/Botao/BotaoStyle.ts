import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const btnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 140px;
    font-size: 16px;
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
      color: ${variaveis.amareloTema};
      background: linear-gradient(
        180deg,
        ${variaveis.pretoTemaClaro},
        ${variaveis.pretoTemaEscuro}
      );
    }
  }
`
export { Link }
