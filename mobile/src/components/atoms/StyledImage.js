import { Image } from 'react-native';
import styled from 'styled-components';

const StyledImage = styled.Image`
width: ${props => props.size || 30};
height: ${props => props.size || 30};
`;

export default StyledImage;