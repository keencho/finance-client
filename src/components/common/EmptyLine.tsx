interface EmptyLineProps {
  height?: number
}

const EmptyLine = (props: EmptyLineProps): JSX.Element => {
  return (
    <div style={{
      height: props.height === undefined ? 10 : props.height
    }}/>
  )
}

export default EmptyLine
