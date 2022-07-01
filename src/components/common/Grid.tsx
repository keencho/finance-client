import {Card, Col, Container, Row} from 'react-bootstrap';
import {useRecoilValue} from 'recoil';
import HeaderHeightAtom from '@/recoil/header-height.atom';
import classNames from 'classnames';
import {useTheme} from 'styled-components';

interface Props {
  headerText: string
  headerActionNode?: JSX.Element
  bodyNode: JSX.Element
}

const DEFAULT_PADDING: number = 20;

const Grid = (props: Props): JSX.Element => {
  const headerHeight = useRecoilValue<number>(HeaderHeightAtom);
  const theme = useTheme();
  
  const cardHeight = () => {
    return `calc(100vh - ${headerHeight}px - ${DEFAULT_PADDING * 2}px`;
  }
  
  return (
    <Container
      style={{
        paddingTop: `${DEFAULT_PADDING}px`,
        paddingBottom: `${DEFAULT_PADDING}px`
      }}>
      <Card border={theme.mode} style={{ height: cardHeight() }}>
        <Card.Header
          bsPrefix={'card-header py-2'}
          style={{ borderBottomWidth: '2px', backgroundColor: theme.color.gridBackgroundColor, borderBottom: theme.mode === 'light' ? '1px solid rgba(0,0,0,.125)' : '1px solid #737373' }}
        >
          <Row className={classNames('d-flex', 'justify-content-center', 'align-items-center')}>
            <Col>
              <h4 className={'m-0'}>{props.headerText}</h4>
            </Col>
            <Col md={'auto'} className={'d-flex'}>
              {props.headerActionNode}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className={classNames('d-flex', 'flex-column', 'h-100')} style={{ backgroundColor: theme.color.gridBackgroundColor }}>
          {props.bodyNode}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Grid
