import { Html } from '@react-email/html';
import { Text } from '@react-email/text';

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export default function Email({
  name,
  email,
  message,
}: EmailProps) {
  return(
  <Html>
      <Text>Nombre: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Mensaje: {message}</Text>
  </Html>
  )
}
