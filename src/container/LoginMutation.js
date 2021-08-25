import { gql, useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`
export const LoginMutation = () => {
  const [mutation, { loading, error }] = useMutation(LOGIN)

  return { mutation, loading, error }
}
