import { ReactElement } from 'react';

const DataDiv = ({
  text,
  data,
}: {
  text: string;
  data: string;
}): ReactElement => {
  return (
    <div>
      <span className="text">{text}</span>
      <span className="data">{data.toUpperCase()}</span>
    </div>
  );
};

export default DataDiv;
