import React from 'react'
import { storiesOf } from '@storybook/react'

import { ErrorSnackBar } from '../../../src'
import { Providers } from '../providers'

const errorSnackBar = () => {
  storiesOf('ErrorSnackBar', module)
    .add('Short text', () => (
      <Providers>
        <ErrorSnackBar message="This is an error message" />
      </Providers>
    ))
    .add('Long text', () => (
      <Providers>
        <ErrorSnackBar message="Mauris dapibus arcu eu venenatis malesuada. Integer blandit interdum mauris quis semper. Aenean purus quam, blandit eget ex id, mattis gravida dolor. Etiam pulvinar massa ac nibh cursus, in interdum ante egestas. Pellentesque congue, sapien non aliquam venenatis, nisl arcu consectetur dui, eget bibendum sem dolor vel nulla. Vivamus vitae turpis non nisi euismod rhoncus. Nam a massa ultricies, posuere leo in, mollis est. Ut posuere blandit ipsum, vitae porta sem bibendum vitae. Maecenas ac enim eget nulla consequat laoreet maximus bibendum elit. Nam vulputate diam et risus vestibulum, et vulputate eros luctus. Nullam in ultrices nisl. Vestibulum varius felis elit, non ultrices nisl lobortis in. Ut malesuada, diam vitae luctus efficitur, magna metus luctus mi, tristique iaculis lorem felis et mauris. Nulla volutpat quam in metus consectetur iaculis." />
      </Providers>
    ))
}

export default errorSnackBar
