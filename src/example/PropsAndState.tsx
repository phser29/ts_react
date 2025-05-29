import React, { useState } from 'react'
import { Button } from './../components/button/index';
import { Label } from './../components/label/index';

export const PropsAndState = () => {
  const [count, setCount] = useState(0);
  
  const sub = () => {
    setCount(count - 1);
  }

  const add = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button onClick={sub} label={"-"}/>
      <Label data={count}/>
      <Button onClick={sub} label={"+"}/>
    </>
  )
}
