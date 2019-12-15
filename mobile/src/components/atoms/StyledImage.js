import { Image } from 'react-native';
import styled from 'styled-components';

const StyledImage = styled.Image`
width: ${props => props.width || 30};
height: ${props => props.height || 30};
`;

export default StyledImage;