import { Botao } from './BotaoStyle'

type Props = {
  Children: string
}

export const BotaoNav = ({ Children }: Props) => <Botao>{Children}</Botao>
