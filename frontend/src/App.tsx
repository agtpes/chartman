import React, { Component } from 'react';
import { Grid, Button, Header} from 'semantic-ui-react'
import './App.css';
import {initCanvas, controlCanvas} from './functions/graph.core';
class App extends Component {
  componentWillMount() {
    // dispatch some actions if you use Redux
  }

  componentDidMount() {
    initCanvas();
    controlCanvas();
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h5' dividing className="component-box">
                Active Objects
              </Header>
              <Button.Group basic size='small' className="components">
                <Button icon='circle' />
                <Button icon='point' />
                <Button icon='upload' />
                <Button icon='download' />
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={13}>
              <canvas id="c" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App; 