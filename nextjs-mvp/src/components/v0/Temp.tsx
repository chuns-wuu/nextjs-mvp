import update from 'immutability-helper'
import type { FC } from 'react'
import { useCallback, useState } from 'react'

import { Card } from './Card'

const style = {
  width: 400,
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Communicate',
      },
      {
        id: 2,
        text: 'Rollback',
      },
      {
        id: 3,
        text: 'Auto-scale',
      },
      {
        id: 4,
        text: 'Escalate',
      },
      {
        id: 5,
        text: 'Access request',
      },
      {
        id: 6,
        text: 'Log check',
      },
      {
        id: 7,
        text: 'Communicate',
      },
    ])

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      )
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      },
      [],
    )

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
