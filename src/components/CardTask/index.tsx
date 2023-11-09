import * as S from './styles'
import { Pencil, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CardTask() {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.Content>
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          veniam aut odit eveniet distinctio officia vero, consectetur earum
          soluta assumenda nulla facere ducimus veritatis cum modi enim quae
          magni aliquid.
        </p>
      </S.Content>

      <S.Icon>
        <a href="/nova-tarefa">
          <Pencil size={25} color={colors.gray[100]} />
        </a>

        <Trash size={25} color={colors.red[700]} />
      </S.Icon>
    </S.Container>
  )
}
