import React, { useState, useEffect } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {
  Container,
  Figure, DataContainer,
  DataContainerText, Image,
  Form, Input,
  Button, Footer,
  Text, ButtonFooter
} from './styles'

export const UserForm = ({ onSubmit, activateAuth, register, setRegister }) => {
  const [data, setData] = useState({ title: '', fn: () => {} })
  const email = useInputValue('')
  const password = useInputValue('')

  useEffect(() => {
    const handleChangeForm = () => {
      if (register) {
        setData({ title: 'Sign Up', fn: onSubmit })
      } else {
        setData({ title: 'Log In', fn: activateAuth })
      }
    }

    handleChangeForm()
  }, [!register])

  const handleSubmit = event => {
    event.preventDefault()
    data.fn({
      email: email.value,
      password: password.value
    })
  }

  if (data === undefined) return <h2>...Loading form 😸</h2>

  return (
    <Container>
      <Figure>
        <Image src='https://i.ibb.co/RCtjfSB/form-image-petgram.png' alt='Form image Petgram' title='Form image Petgram' />
      </Figure>
      <DataContainer>
        <DataContainerText>
          {data.title} with your Petgram account and discover the amazing world of pets
        </DataContainerText>
      </DataContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Email'
          {...email}
        />
        <Input
          placeholder='Password'
          type='password'
          {...password}
        />
        <Button>
          {data.title}
        </Button>
      </Form>
      <Footer>
        <Text>Don't have an account?</Text>
        <ButtonFooter onClick={() => setRegister(!register)}>
          {register ? 'Log In' : 'Sign Up'}
        </ButtonFooter>
      </Footer>
    </Container>
  )
}
