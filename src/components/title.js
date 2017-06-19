import styled from 'styled-components';
import styledProps, { bind } from 'styled-props';
import {
  background,
  color,
  size,
} from './styles.js';

const white = `#FFF`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    background: ${styledProps(background)};
    color: ${styledProps(color, 'color')}
`

export default Title;