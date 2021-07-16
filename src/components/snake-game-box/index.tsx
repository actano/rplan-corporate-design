import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { CorporateDesignTheme } from '../../theme/corporate-design-theme'
import useInterval from './useInterval'

// TODO: Add "Press Start 2P" font

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  playArea: {
    border: '5px solid',
    borderColor: theme.palette.colors.blue,
    width: '585px',
    height: '440px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  gameOver: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.colors.red,
    fontSize: '60px',
    textTransform: 'uppercase',
  },
  playButton: {
    position: 'fixed',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.colors.orange,
    background: '#502c7b',
    border: '2px solid',
    borderColor: theme.palette.colors.lightPeach,
    padding: '10px',
    fontSize: '30px',
    boxShadow: '4px 4px 0px 0px #a3d001',
    letterSpacing: '5px',
    textTransform: 'uppercase',
  },
  scoreBox: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '5px solid',
    borderColor: theme.palette.colors.blue,
    padding: '30px',
  },
  highScore: {
    fontSize: '24px',
    color: theme.palette.colors.orange,
  },
  currentScore: {
    fontSize: '24px',
    color: '#a3d001',
  },
}))

const canvasX = 1000
const canvasY = 1000
const initialSnake = [[4, 10], [4, 10]]
const initialApple = [14, 10]
const scale = 50
const timeDelay = 100

const SnakeGameBox = () => {
  const classes = useStyles()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [snake, setSnake] = useState(initialSnake)
  const [apple, setApple] = useState(initialApple)
  const [direction, setDirection] = useState([0, -1])
  const [delay, setDelay] = useState<number | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const checkCollision = (head: number[]) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true
    }
    return false
  }

  const handleSetScore = () => {
    if (score > Number(localStorage.getItem('snakeScore'))) {
      localStorage.setItem('snakeScore', JSON.stringify(score))
    }
  }

  const appleAte = (newSnake: number[][]) => {
    const coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      const newApple = coord
      setScore(score + 1)
      setApple(newApple)
      return true
    }
    return false
  }

  const runGame = () => {
    const newSnake = [...snake]
    const newSnakeHead = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]]
    newSnake.unshift(newSnakeHead)
    if (checkCollision(newSnakeHead)) {
      setDelay(null)
      setGameOver(true)
      handleSetScore()
    }
    if (!appleAte(newSnake)) {
      newSnake.pop()
    }
    setSnake(newSnake)
  }

  useInterval(() => runGame(), delay)

  useEffect(
    () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.setTransform(scale, 0, 0, scale, 0, 0)
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
          ctx.fillStyle = '#a3d001'
          snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1))
          ctx.fillStyle = 'orange'
          ctx.fillRect(apple[0], apple[1], 1, 1)
        }
      }
    },
    [snake, apple, gameOver],
  )

  const play = () => {
    setSnake(initialSnake)
    setApple(initialApple)
    setDirection([1, 0])
    setDelay(timeDelay)
    setScore(0)
    setGameOver(false)
  }

  const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        setDirection([-1, 0])
        break
      case 'ArrowUp':
        setDirection([0, -1])
        break
      case 'ArrowRight':
        setDirection([1, 0])
        break
      case 'ArrowDown':
        setDirection([0, 1])
        break
      default:
        break
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onKeyDown={e => changeDirection(e)}>
      <div className={classes.scoreBox}>
        <table>
          <tr className={classes.highScore}>
            <td>High Score</td>
            <td>:</td>
            <td>{localStorage.getItem('snakeScore')}</td>
          </tr>
          <tr className={classes.currentScore}>
            <td>Current Score</td>
            <td>:</td>
            <td>{score}</td>
          </tr>
        </table>
      </div>

      <canvas
        className={classes.playArea}
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
      />

      {
        gameOver && (
          <div className={classes.gameOver}>
            Game Over
          </div>
        )
      }

      <button
        type="button"
        className={classes.playButton}
        onClick={play}
      >
        Play
      </button>

    </div>
  )
}

export { SnakeGameBox }
