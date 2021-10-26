import { CommonSection } from './common/CommonSection';
import { EmptyRowCol } from './common';
import { CommonRows } from './common/CommonRow';

export default function PersonalInfo({ payload }) {
  return (
    <CommonSection title="Personal Info">
      <EducationRow payload={payload} />
    </CommonSection>
  );
}

function EducationRow({ payload }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item) {
  return {
    left: {
      title: item.title,
    },
    right: {
      title: item.value,
      descriptions: item.descriptions,
    },
  };

}
