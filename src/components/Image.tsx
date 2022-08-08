import { ReactElement } from 'react';

const Image = ({ path, alt }: { path: string; alt: string }): ReactElement => {
  return <img src={path} alt={alt} />;
};

export default Image;
