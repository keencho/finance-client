import LayoutProps from '@/models/element/layout-props.model';
import Header from '@/components/common/Header';
import style from '@/styles/base.module.scss'
import {Col, Container, Row} from 'react-bootstrap';

const Base = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div className={style.wrapper}>
				<Container>
					<Row>
						<Col>
							{children}
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default Base