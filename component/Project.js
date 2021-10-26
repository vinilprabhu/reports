import { CommonSection } from './common/CommonSection';
import { DateTime } from 'luxon';
import { CommonRows } from './common/CommonRow';
import Util from './common/Util';
import { EmptyRowCol } from './common';

export default function Project({ payload }) {
  return (
    <CommonSection title="PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}

function ProjectRow({ payload }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload) {
  let title = '';
  if (payload.startedAt) {
    const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
    const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
      DATE_FORMAT.MONTH_YYYY,
    );
    title = (() => {
      if (payload.endedAt) {
        const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
          DATE_FORMAT.MONTH_YYYY,
        );
        return `${startedAt} ~ ${endedAt}`;
      }
      return `${startedAt}`;
    })();
  }

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.subTitle,
      descriptions: payload.descriptions,
    },
  };
}
