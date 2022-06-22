import {Card, Col, Container, Row} from 'react-bootstrap';
import {useRecoilValue} from 'recoil';
import HeaderHeightAtom from '@/recoil/header-height.atom';
import classNames from 'classnames';
import {GridWrapper} from '@/components/common/Grid.styled';
import ThemeModeAtom from '@/recoil/theme-mode.atom';

interface Props {
  headerText: string
  headerActionNode?: JSX.Element
  bodyNode: JSX.Element
}

const DEFAULT_PADDING: number = 20;

const Grid = (props: Props): JSX.Element => {
  
  const mode = useRecoilValue(ThemeModeAtom);
  const headerHeight = useRecoilValue<number>(HeaderHeightAtom);
  
  const cardHeight = () => {
    return `calc(100vh - ${headerHeight}px - ${DEFAULT_PADDING * 2}px`;
  }
  
  return (
    <GridWrapper mode={mode}>
      <Container style={{
        paddingTop: `${DEFAULT_PADDING}px`,
        paddingBottom: `${DEFAULT_PADDING}px`,
      }}>
        <Card border={'light'} style={{height: cardHeight()}}>
          <Card.Header bsPrefix={'card-header bg-transparent py-2'} style={{ borderBottomWidth: '2px' }}>
            <Row className={classNames('d-flex', 'justify-content-center', 'align-items-center')}>
              <Col>
                <h4 className={'m-0'}>{props.headerText}</h4>
              </Col>
              <Col md={'auto'} className={'d-flex'}>
                {props.headerActionNode}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className={classNames('d-flex', 'flex-column', 'h-100')}>
            {props.bodyNode}
          </Card.Body>
        </Card>
      </Container>
    </GridWrapper>
  )
}

export default Grid
