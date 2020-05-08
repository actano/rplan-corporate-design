/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined'
import { storiesOf } from '@storybook/react'

import { Providers } from '../providers'
import {
  DotMenu, DotMenuItem, IconButtonMenu, MenuItem,
} from '../../../src'


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
  storiesOf('Icon-Button Menu', module)
    .add('IconButtonMenu', () => (
      <Providers>
        <div style={{ paddingLeft: '20px' }}>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h3" align="left">
                IconButton
              </Typography>
              Different Icons for the IconButton an be set via the prop <tt>icon</tt><p />
              Default Icon is the <tt>DotIcon</tt>
            </Grid>
            <Grid
              container
              spacing={2}
              direction="row"
            >
              <div style={{ width: '300px' }} />
              <IconButtonMenu>
                <MenuItem onClick={() => console.log('item one clicked')}>Item one</MenuItem>
                <MenuItem onClick={() => console.log('item two clicked')}>Item two</MenuItem>
              </IconButtonMenu>
              <IconButtonMenu icon={ExpandMore}>
                <MenuItem onClick={() => console.log('item one clicked')}>Item one</MenuItem>
                <MenuItem onClick={() => console.log('item two clicked')}>Item two</MenuItem>
              </IconButtonMenu>
              <IconButtonMenu
                icon={AddBoxOutlined}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={() => console.log('item one clicked')}>Item one</MenuItem>
                <MenuItem onClick={() => console.log('item two clicked')}>Item two</MenuItem>
              </IconButtonMenu>
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
    .add('DotMenu', () => (
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
              <WhiteDotMenuOnBlueBackground />
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
}


export default stories
