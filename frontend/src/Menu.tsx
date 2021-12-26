import React from 'react'
import { Dropdown, Icon, Menu, Segment, Grid, Card} from 'semantic-ui-react'
import App from './App';
import Tab from './Tab';

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const MenuStructure = () => (
    <div>

      <Menu attached='top'>
        <Menu.Item name='vertically' fitted='vertically'>
          <b>Chartman</b>
        </Menu.Item>        
        <Dropdown item icon='wrench' simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='dropdown' />
              <span className='text'>New</span>
              <Dropdown.Menu>
                <Dropdown.Item>Chart</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Save As</Dropdown.Item>
            <Dropdown.Item>Edit Components</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input
                className='prompt'
                type='text'
                placeholder='Chart elements...'
              />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
        </Menu.Menu>
      </Menu>
      
            <Segment attached='bottom' id='panelbox' className='panel'>
              <Tab />
            </Segment>      
      
      
    </div>
  )
export default MenuStructure;