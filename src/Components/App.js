import React from 'react';
import {
  Button
} from 'antd';

import GridContainer from './GridContainer';
import {
  defaultDimension
} from '../Config/GridDimensions';

function App() {

  const [runGame, setRunGame] = React.useState(false);
  const [height, setHeight] = React.useState(defaultDimension.height);
  const [width, setWidth] = React.useState(defaultDimension.width);
  const [size, setSize] = React.useState(defaultDimension.size);

  return (
    <div>
      <Button onClick={() => setRunGame(!runGame)} style={{backgroundColor: 'red'}}>
        {!runGame ? 'Start' : 'Stop'}
      </Button>
      <GridContainer width={width} height={height} size={size} />
    </div>
  );
}

export default App;
