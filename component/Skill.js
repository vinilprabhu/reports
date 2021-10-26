import { Row, Col } from 'reactstrap';
import { Style } from './common/Style';
import { EmptyRowCol } from './common';

export default function Skill({ payload }) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2>
              <span style={Style.blue}>SKILL</span>
            </h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function SkillRow({ skill, index }) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          {/* {skill.items.map((item) => JSON.stringify(item, null, 2))} */}
          {CreateCalculatedSkillItems(skill.items)}
        </Col>
      </Row>
    </div>
  );
}

function CreateCalculatedSkillItems(items) {

  const layer = 3;

  const splitPoint = Math.ceil(items.length / layer);

  const list = [];

  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  return (
    <Row className="mt-2 mt-md-0">
      {list.map((skills, index) => {
        return (
          <Col md={4} xs={12} key={index.toString()}>
            <ul>
              {skills.map((skill, skillIndex) => {
                return (
                  <li key={skillIndex.toString()}>
                    {skill.title}
                  </li>
                );
              })}
            </ul>
          </Col>
        );
      })}
    </Row>
  );
}