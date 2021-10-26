import { Row, Col } from 'reactstrap';

export function EmptyRowCol({ children }) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

export function HrefTargetBlank({ url, text }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
}
