import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { Providers } from '../providers'
import { DotMenu, DotMenuItem } from '../../../src'

const useStyles = makeStyles((theme) => {
  const { colors } = theme.palette

  return {
    container: {
      backgroundColor: colors.darkerBlue,
      width: theme.spacing(20),
    },
    button: {
      color: colors.white,
    },
  }
})

const WhiteDotMenuOnBlueBackground = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <DotMenu
        className={classes.button}
        classes={{
          button: classes.button,
        }}
      >
        <DotMenuItem onClick={() => console.log('item one clicked')}>Item one</DotMenuItem>
        <DotMenuItem onClick={() => console.log('item two clicked')}>Item two</DotMenuItem>
      </DotMenu>
    </div>
  )
}

const stories = () => {
  storiesOf('Dot Menu', module)
    .add('Dot Menu', () => (
      <Providers>
        <div style={{ paddingLeft: '20px' }}>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h2" align="left">
                  Dot Menu
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" align="left">
                  Default color and size
              </Typography>
              <DotMenu>
                <DotMenuItem onClick={() => console.log('item one clicked')}>Item one</DotMenuItem>
                <DotMenuItem onClick={() => console.log('item two clicked')}>Item two</DotMenuItem>
              </DotMenu>
            </Grid>
            <Grid item>
              <Typography variant="h3" align="left">
                White dot menu on blue background
              </Typography>
              <WhiteDotMenuOnBlueBackground/>
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
}


export default stories
