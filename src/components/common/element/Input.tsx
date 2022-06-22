import {FloatingLabel, Form} from 'react-bootstrap';
import {Dispatch, SetStateAction} from 'react';
import {useTheme} from 'styled-components';
import classNames from 'classnames';

interface Props {
  wrapperClassName?: string
  inputClassName?: string
  onEnter?: () => void | Promise<void>
  type: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
}

const Input = (props: Props): JSX.Element => {
  const theme = useTheme();
  
  return (
    <FloatingLabel
      label={props.placeholder}
      className={props.wrapperClassName}
    >
      <Form.Control
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className={classNames(props.inputClassName, theme.class.inputTextClass, theme.class.inputBackgroundClass)}
        onKeyPress={(e) => {
          if (e.key.toUpperCase() === 'ENTER') {
            if (props.onEnter) {
              props.onEnter()
            }
          }
        }}
      />
    </FloatingLabel>
  )
}

export default Input
