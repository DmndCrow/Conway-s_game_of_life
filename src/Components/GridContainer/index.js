import React from 'react';
import PropTypes from 'prop-types';

import {
  BoxContainer, BoxRow, Box
} from '../../Styles/Grid';

function GridContainer(props){

  const {
    height, width, size
  } = props;


  const [bigmap, setBigmap] = React.useState([]);

  React.useEffect(() => {
    setBigmap(Array(Math.floor(height / size))
      .fill([])
      .map(() => Array(Math.floor(width / size)).fill(0)));
  }, [height, width, size]);

  const changeState = (row, col) => {
    let temp = [...bigmap];
    temp[row][col] = Math.abs(temp[row][col] - 1);
    setBigmap(temp);
  };

  return (
    <BoxContainer>
      {bigmap.map((row, i) => (
        <BoxRow key={i}>
          {row.map((val, j) => {
            return <Box key={j} num={val} size={size} onClick={() => changeState(i, j)} />;
          })}
        </BoxRow>
      ))}
    </BoxContainer>
  );
}

GridContainer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default GridContainer;
