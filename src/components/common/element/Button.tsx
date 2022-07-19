import {useTheme} from 'styled-components';
import {Button as BootstrapButton} from 'react-bootstrap';
import {Icon, IconProps} from '@/components/common/Icon';
import classNames from 'classnames';

interface Props {
  text: string
  onClick: () => any
  className?: string
  iconProps?: IconProps
  size?: 'sm' | 'lg'
}

const Button = (props: Props): JSX.Element => {
  const theme = useTheme();
  
  return (
    <BootstrapButton
      variant={theme.color.btnVariantColor}
      onClick={props.onClick}
      className={props.className}
      size={props.size ?? 'sm'}
    >
      {props.text}
      {
        props.iconProps &&
        <Icon
          icon={props.iconProps.icon}
          size={props.iconProps.size ?? '1x'}
          className={classNames(props.iconProps.className, 'ms-1')}
          // 버튼 안쪽의 아이콘은 hover나 기타 css selector을 위해 부모(버튼)의 css를 그대로 상속받는다.
          color={'inherit'} />
      }
    </BootstrapButton>
  )
}

export default Button
