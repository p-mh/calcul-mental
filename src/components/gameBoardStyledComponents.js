import styled from 'styled-components';

export const Question = styled.p`
  margin: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

export const Answer = styled.input`
  border-style: solid;
  border-width: 2px;
  border-color: ${props => (props.falseAnswer ? 'red' : '#555')}
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  font-size: 2rem;
  max-width: 100px;
  margin: 20px 0;
`;
