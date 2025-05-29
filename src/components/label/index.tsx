import React from 'react'
import  styled  from '@emotion/styled';

const Container = styled.label``;

interface Props {
  data: number;
}

export const Label = (props: Props) => {
  return (
    <div>
      <Container>{props.data}</Container>
    </div>
  )
}