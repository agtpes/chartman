import React, { Component } from 'react';
import { Grid, Button, Header, Form, TextArea} from 'semantic-ui-react'
import './App.css';
import {initCanvas, controlCanvas} from './functions/graph.core';
class App extends Component {

  constructor(props:any) {
    super(props);
    props.data = [
      {
        id: 1,
        def: {
          a:1
        }
      },
      {
        id: 2,
        def: {
          a:2
        }
      }
    ]
    this.state = {componentId: true};
  }

  componentWillMount() {
    // dispatch some actions if you use Redux
  }

  componentDidMount() {
    initCanvas();
    controlCanvas();
  }

  changeComponent() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h5' dividing className="component-box">
                Palette
              </Header>
              <Button.Group basic size='small' className="components">
                <Button data-id="1" onClick={this.changeComponent} >Component 1</Button>
                <Button data-id="2" onClick={this.changeComponent}>Component 2</Button>
              </Button.Group>
              <Form className="components-code">
                <TextArea placeholder='' />
              </Form>
              <div className="components-update">
                <Button>Update</Button>
              </div>
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