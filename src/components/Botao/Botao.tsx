import { Link } from './BotaoStyle'

type Props = {
  Children: string
}

export const BotaoNavs = ({ Children }: Props) => (
  <Link to={''}>{Children}</Link>
)
