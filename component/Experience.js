import { DateTime, Duration } from 'luxon';
import { Badge, Col, Row } from 'reactstrap';
import { EmptyRowCol } from './common';
import { Style } from './common/Style';
import Util from './common/Util';

export default function Experience({ payload }) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <div>{getFormattingExperienceTotalDuration(payload)}</div>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload) {
  const durations = payload.list
    .map((item) => {
      return {
        endedAt: item.endedAt
          ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
          : DateTime.local(),
        startedAt: DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
      };
    })
    .map(({ endedAt, startedAt }) => {
      return endedAt.plus({ month: 1 }).diff(startedAt);
    });

  const totalExperience = durations.reduce((prev, cur) => prev.plus(cur), Duration.fromMillis(0));

  const experienceYears = parseInt(totalExperience.as('years'));
  const experienceMonths = parseInt(totalExperience.as('months')) - 12 * experienceYears;

  return `${experienceYears ? `${experienceYears} years ` : ''}${experienceMonths ? `${experienceMonths} months` : ''}`;
}

function ExperienceRow({ item, index }) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <h6>{item.location}</h6>
          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{description}</li>
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={{ background: 'grey', margin: 2 }}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAtString, endedAtString) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ current`,
        isWorking: true,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        <Badge
          style={{ background: 'blue', margin: 2 }}
        >{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}
