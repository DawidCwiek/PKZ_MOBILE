import { Text } from 'react-native';
import styled from 'styled-components';

const Heading = styled.Text`
  font-size: ${props => props.size || 30};
  font-weight: 600;
  color: ${props => props.color || "black" };
`;

export default Heading;