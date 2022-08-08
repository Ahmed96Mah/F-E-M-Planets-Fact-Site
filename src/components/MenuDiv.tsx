import { Link } from 'react-router-dom';
import chevron from '../assets/icon-chevron.svg';
import Image from '../components/Image';

const MenuDiv = ({
  path,
  text,
  onChangePlanet,
}: {
  path: string;
  text: string;
  onChangePlanet: Function;
}) => {
  const changePlanet = (e: Event): void => {
    if (
      (e.target as HTMLElement).nodeName === 'A' &&
      (e.target as HTMLElement).id === 'text'
    ) {
      const temp = (e.target as HTMLElement).textContent!.toLowerCase();
      const planetName = temp.charAt(0).toUpperCase().concat(temp.slice(1));
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.classList.contains('active') && anch.classList.toggle('active');
        });
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.textContent === (e.target as HTMLElement).textContent &&
            anch.classList.toggle('active');
        });
      onChangePlanet(planetName);
    } else if (
      (e.target as HTMLElement).nodeName === 'A' &&
      (e.target as HTMLElement).id === 'img'
    ) {
      const temp = (e.target as HTMLElement)
        .querySelector('img')!
        .attributes[1].nodeValue!.slice(2)
        .toLowerCase();
      const planetName = temp.charAt(0).toUpperCase().concat(temp.slice(1));
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.classList.contains('active') && anch.classList.toggle('active');
        });
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.textContent === temp.toUpperCase() &&
            anch.classList.toggle('active');
        });
      onChangePlanet(planetName);
    } else if ((e.target as HTMLElement).nodeName === 'IMG') {
      const temp = (e.target as HTMLElement).attributes[1]
        .nodeValue!.slice(2)
        .toLowerCase();
      const planetName = temp.charAt(0).toUpperCase().concat(temp.slice(1));
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.classList.contains('active') && anch.classList.toggle('active');
        });
      document
        .querySelector('.upper')!
        .querySelectorAll('a')
        .forEach((anch) => {
          anch.textContent === temp.toUpperCase() &&
            anch.classList.toggle('active');
        });
      onChangePlanet(planetName);
    }
    document.querySelector('.upper')!.classList.toggle('active');
    document.querySelector('.menu')!.classList.toggle('hide');
    document.querySelector('.lower')!.classList.toggle('hide');
    document.querySelector('main')!.classList.toggle('hide');
    document.querySelectorAll('li').forEach((listItem) => {
      listItem.classList.contains('active') &&
        listItem.classList.toggle('active');
    });
    document.querySelector('li')!.classList.toggle('active');
    document
      .querySelector('.info')!
      .querySelector('nav')!
      .querySelector('li')!
      .classList.toggle('active');
  };

  return (
    <div className="navDiv">
      <div className={`circle ${text}`}></div>
      <div className="nav">
        <Link
          id="text"
          to={path}
          onClick={
            changePlanet as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
        >
          {text.toUpperCase()}
        </Link>
        <Link
          id="img"
          to={path}
          onClick={
            changePlanet as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
        >
          <Image path={chevron} alt={`to${text.toUpperCase()}`} />
        </Link>
      </div>
    </div>
  );
};

export default MenuDiv;
