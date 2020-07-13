import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'

import { themeConfig } from '../../src/theme/theme-config'
import { UserAvatar } from '../../src/components/user-avatar'
import { UserAvatarPlaceholder } from '../../src/components/user-avatar-placeholder'
import { UserAvatarWithPlaceholder } from '../../src/components/user-avatar-with-placeholder'


const theme = createMuiTheme(themeConfig)

const createComponent = props => mount(
  <ThemeProvider theme={theme}>
    <UserAvatarWithPlaceholder {...props} />
  </ThemeProvider>,
)

describe('UserAvatarWithPlaceholder component', () => {
  it('should render', () => {
    const wrapper = createComponent()
    expect(wrapper.find(UserAvatarWithPlaceholder)).to.exist
  })

  context('when `user` is not provided', () => {
    context('when `enablePlaceholder` is false', () => {
      it('should render an UserAvatar with defaults', () => {
        // One use case of this is on the first render of a component,
        // before getting data from the API. Currently, we show an empty
        // purple circle instead of the dashed placeholder.

        const wrapper = createComponent({
          user: undefined,
          enablePlaceholder: false,
        })

        expect(wrapper.find(UserAvatar)).to.be.present()
        expect(wrapper.find(UserAvatarPlaceholder)).to.not.be.present()
      })
    })

    context('when `enablePlaceholder` is true', () => {
      it('should render an `UserAvatarPlaceholder`', () => {
        const wrapper = createComponent({
          user: undefined,
          enablePlaceholder: true,
        })

        expect(wrapper.find(UserAvatar)).to.not.be.present()
        expect(wrapper.find(UserAvatarPlaceholder)).to.be.present()
      })
    })
  })

  context('when `user` is provided', () => {
    context('when `enablePlaceholder` is false', () => {
      it('should render an UserAvatar', () => {
        const wrapper = createComponent({
          user: { firstName: 'Foo' },
          enablePlaceholder: false,
        })

        expect(wrapper.find(UserAvatar)).to.be.present()
        expect(wrapper.find(UserAvatarPlaceholder)).to.not.be.present()
      })
    })

    context('when `enablePlaceholder` is true', () => {
      it('should render an UserAvatar', () => {
        const wrapper = createComponent({
          user: { firstName: 'Foo' },
          enablePlaceholder: false,
        })

        expect(wrapper.find(UserAvatar)).to.be.present()
        expect(wrapper.find(UserAvatarPlaceholder)).to.not.be.present()
      })
    })
  })
})
