import { Row, Col, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmptyRowCol } from './common';
import { Style } from './common/Style';
import { HrefTargetBlank } from './common';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile({ payload }) {
  const { image, contact, name, notice, links } = payload;
  return (
    <div className="mt-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          {createProfileContactMap(contact)}
          {createProfileLinkMap(links)}
          {createNoticeArea(notice)}
        </Col>
      </Row>
    </div>
  );
}

function createNameArea(name) {
  return (
    <Row>
      <Col className="text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts) {
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

function createProfileLinkMap(contacts) {
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileLinks key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

function createNoticeArea(notice) {
  if (notice.enabled)
    return (
      <EmptyRowCol>
        <Alert color="secondary" role="alert" className="mt-3">
          {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
          {' '}
          {notice.title}
        </Alert>
      </EmptyRowCol>
    );
  else return '';
}

function ProfileImage({ src }) {
  return (
    <div className="pb-3 text-md-right text-center">
      <Image
        style={{ maxHeight: '320px' }}
        className="img-fluid rounded"
        src={src}
        alt="Profile" />
    </div>
  );
}

function ProfileContact({ payload, }) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="text-right">
        <FontAwesomeIcon size='lg' icon={payload.icon} />
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
}

function ProfileLinks({ payload, }) {
  return (
    <Link href={payload.link} passHref={true}>
      <Button style={{ margin: 5 }} outline>
        <FontAwesomeIcon size='2x' icon={payload.icon} />
      </Button>
    </Link>

  );
}

function createLink(payload) {
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
