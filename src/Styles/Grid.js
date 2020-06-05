import styled from 'styled-components';

const gridColor = '#db2c95';
const transparent = 'rgb(177,243,130)';
const filledColor = 'rgb(116, 113, 113, 0.5)';

const BoxContainer = styled.div`
  border: 1px solid ${gridColor};
`;

const BoxRow = styled.div`
  display: flex;
`;

const Box = styled.button`
  border: 1px solid ${gridColor};
  background: ${(props) => (props.num ? filledColor : transparent)};
  width: ${(props) => props.size || '24'}px;
  height: ${(props) => props.size || '24'}px;
`;

export {
  Box, BoxRow, BoxContainer
};
