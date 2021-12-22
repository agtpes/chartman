import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import './index.css';

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const Toolbox = () => (
  <Card className="toolbox">
    <Card.Content header='Toolbox' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='edit' />4 Components
    </Card.Content>
  </Card>
)

export default Toolbox