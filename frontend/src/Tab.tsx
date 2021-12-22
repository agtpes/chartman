import React from 'react'
import { Tab } from 'semantic-ui-react'
import App from './App';

const panes = [
  {
    menuItem: 'Chart 1',
    render: () => <Tab.Pane attached='top' className='panel'><App /></Tab.Pane>,
  }
]

const TabExampleAttachedBottom = () => (
  <Tab menu={{ attached: 'bottom' }} panes={panes} />
)

export default TabExampleAttachedBottom
