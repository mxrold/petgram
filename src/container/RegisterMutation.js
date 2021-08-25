import { gql, useMutation } from '@apollo/react-hooks'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const RegisterMutation = () => {
  const [mutation, { loading, error }] = useMutation(REGISTER)

  return { mutation, loading, error }
}
