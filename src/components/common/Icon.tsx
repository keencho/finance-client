import {IconProp, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTheme} from 'styled-components';

interface Props {
  icon: IconProp
  color?: string
  size?: SizeProp
  className?: string
}

const Icon = (props: Props): JSX.Element => {
  const theme = useTheme();
  
  const getColor = () => {
    if (props.color) {
      return props.color!;
    }
    
    return theme.color.text;
  }
  
  return <FontAwesomeIcon icon={props.icon} size={props.size ?? '2x'} color={getColor()} className={props.className}  />
}

export default Icon
