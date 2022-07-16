import {useTheme} from 'styled-components';
import {Button as BootstrapButton} from 'react-bootstrap';

interface Props {
  text: string
  onClick: () => any
  className?: string
}

const Button = (props: Props): JSX.Element => {
  const theme = useTheme();
  
  return <BootstrapButton variant={theme.color.btnVariantColor} onClick={props.onClick} className={props.className}>{props.text}</BootstrapButton>
}

export default Button
