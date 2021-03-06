import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { settleComponent } from '@rplan/testhelpers-webclient'

import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import { themeConfig } from '../../src/theme/theme-config'
import { UserAvatar, calcInitials } from '../../src/components/user-avatar'


const theme = createMuiTheme(themeConfig)

const createComponent = props => mount(
  <ThemeProvider theme={theme}>
    <UserAvatar {...props} />
  </ThemeProvider>,
)

describe('UserAvatar component', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  const TestImageWithError = ({
    onError,
  }) => {
    setImmediate(onError)
    return null
  }

  const TestImage = () => null

  it('should render', () => {
    const wrapper = createComponent()

    expect(wrapper.find(UserAvatar)).to.exist
  })

  context('when Gravatar is forced (forceGravatar = true)', () => {
    context('when user has a Gravatar image', () => {
      it('should show Gravatar image', () => {
        const wrapper = createComponent({
          forceGravatar: true,
          ImageComponent: TestImage,
        })

        expect(wrapper.find(UserAvatar).find(TestImage)).to.be.present()
        expect(wrapper.find(UserAvatar).find(TestImage).props().src).to.not.be.empty
      })
    })
    context('when user does not have a Gravatar image', () => {
      it('should show initials instead of image', async () => {
        const wrapper = createComponent({
          firstName: 'John',
          lastName: 'Doe',
          forceGravatar: true,
          ImageComponent: TestImageWithError,
        })
        await settleComponent(wrapper)

        expect(wrapper.find(UserAvatar).find(TestImageWithError)).to.not.be.present()
        expect(wrapper.find(UserAvatar).text()).to.contain('JD')
      })
    })
  })

  context('when Gravatar is not forced (forceGravatar = false)', () => {
    context('when profilePictureUrl is defined', () => {
      it('should show uploaded profile picture', () => {
        const wrapper = createComponent({
          forceGravatar: false,
          profilePictureUrl: 'sampleProfilePicture',
          ImageComponent: TestImage,
        })

        expect(wrapper.find(UserAvatar).find(TestImage)).to.be.present()
        expect(wrapper.find(UserAvatar).find(TestImage).props().src).to.equal('sampleProfilePicture')
      })
    })
    context('when profilePictureUrl is undefined', () => {
      context('when user has a Gravatar image', () => {
        it('should show Gravatar image', () => {
          const wrapper = createComponent({
            forceGravatar: false,
            profilePictureUrl: undefined,
            ImageComponent: TestImage,
          })

          expect(wrapper.find(UserAvatar).find(TestImage)).to.be.present()
          expect(wrapper.find(UserAvatar).find(TestImage).props().src).to.not.be.empty
        })
      })
      context('when user does not have a Gravatar image', () => {
        it('should show initials instead of image', async () => {
          const wrapper = createComponent({
            firstName: 'John',
            lastName: 'Doe',
            forceGravatar: false,
            profilePictureUrl: undefined,
            ImageComponent: TestImageWithError,
          })
          await settleComponent(wrapper)

          expect(wrapper.find(UserAvatar).find(TestImageWithError)).to.not.be.present()
          expect(wrapper.find(UserAvatar).text()).to.contain('JD')
        })
      })
    })
  })
})

describe('calcInitials', () => {
  context('when firstName is set', () => {
    context('when lastName is set', () => {
      context('when email is set', () => {
        it('should create initials using firstName and lastName', () => {
          const initials = calcInitials('John', 'Doe', 'john.doe@allex.ai')
          expect(initials).to.equal('JD')
        })
      })
      context('when email is not set', () => {
        it('should create initials using firstName and lastName', () => {
          const initials = calcInitials('John', 'Doe', '')
          expect(initials).to.equal('JD')
        })
      })
    })
    context('when lastName is not set', () => {
      context('when email is set', () => {
        it('should create initials using only firstName', () => {
          const initials = calcInitials('John', '', 'john.doe@allex.ai')
          expect(initials).to.equal('J')
        })
      })
      context('when email is not set', () => {
        it('should create initials using only firstName', () => {
          const initials = calcInitials('John', '', '')
          expect(initials).to.equal('J')
        })
      })
    })
  })
  context('when firstName is not set', () => {
    context('when lastName is set', () => {
      context('when email is set', () => {
        it('should create initials using only lastName', () => {
          const initials = calcInitials('', 'Doe', 'john.doe@allex.ai')
          expect(initials).to.equal('D')
        })
      })
      context('when email is not set', () => {
        it('should create initials using only lastName', () => {
          const initials = calcInitials('', 'Doe', '')
          expect(initials).to.equal('D')
        })
      })
    })
    context('when lastName is not set', () => {
      context('when email is set', () => {
        it('should create initials using email', () => {
          const initials = calcInitials('', '', 'john.doe@allex.ai')
          expect(initials).to.equal('J')
        })
      })
      context('when email is not set', () => {
        it('should create empty initials', () => {
          const initials = calcInitials('', '', '')
          expect(initials).to.equal('')
        })
      })
    })
  })
})
