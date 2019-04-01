import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './index';

storiesOf('Button', module)
    .add('sample state', () => (
        <Button>
            Bagulheiros
        </Button>
    ))
    .add('segundo caso', () => (
        <Button>
            Bagulhos
        </Button>
    ))