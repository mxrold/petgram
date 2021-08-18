import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {
  Container,
  Figure, DataContainer,
  DataContainerText, Image,
  Form, Input,
  Button, Footer,
  Text, Anchor
} from './styles'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Container>
      <Figure>
        <Image src='https://i.ibb.co/RCtjfSB/form-image-petgram.png' alt='Form image Petgram' title='Form image Petgram' />
      </Figure>
      <DataContainer>
        <DataContainerText>Log In with your Petgram account and discover the amazing world of pets</DataContainerText>
      </DataContainer>
      <Form onSubmit={onSubmit}>
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
          Log In
        </Button>
      </Form>
      <Footer>
        <Text>Don't have an account? <Anchor>Sing up</Anchor></Text>
      </Footer>
    </Container>
  )
}
