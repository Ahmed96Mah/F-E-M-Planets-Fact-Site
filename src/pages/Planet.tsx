import { ReactElement, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import hamIcon from '../assets/icon-hamburger.svg';
import sourceImg from '../assets/icon-source.svg';
import { info } from '../App';
import Image from '../components/Image';
import DataDiv from '../components/DataDiv';
import MenuDiv from '../components/MenuDiv';

const Planet = ({
  planetClass,
  planetInfo,
  onChangeSec,
  onChangePlanet,
}: {
  planetClass: string;
  planetInfo: info;
  onChangeSec: Function;
  onChangePlanet: Function;
}): ReactElement => {
  const pathName = useLocation().pathname;
  // The pathName's length = 1 ONLY  at the root
  const choice =
    pathName.length === 1
      ? 'Earth'.toUpperCase()
      : pathName.slice(1).toUpperCase();

  const handleClick = (e: Event): void => {
    !(e.target as HTMLElement)!.classList.contains('active') &&
      (e.target as HTMLElement)!.classList.toggle('active');
    document.querySelectorAll('li').forEach((listItem) => {
      listItem !== (e.target as HTMLElement) &&
        listItem.classList.contains('active') &&
        listItem.classList.toggle('active');
    });
    const listName = (e.target as HTMLElement).textContent!.toLowerCase();
    listName === 'overview'
      ? document
          .querySelector('.info')!
          .querySelector('li')!
          .classList.toggle('active')
      : listName === 'structure'
      ? document
          .querySelector('.info')!
          .querySelectorAll('li')![1]
          .classList.toggle('active')
      : document
          .querySelector('.info')!
          .querySelectorAll('li')![2]
          .classList.toggle('active');
    const sec =
      listName === 'surface'
        ? 'geology'
        : listName === 'overview'
        ? 'overview'
        : 'structure';
    const imgName =
      listName === 'surface'
        ? 'geology'
        : listName === 'overview'
        ? 'planet'
        : 'internal';
    onChangeSec(sec, imgName);
  };

  const navClick = (e: Event): void => {
    document.querySelector('.upper')!.classList.toggle('active');
    document.querySelector('.menu')!.classList.toggle('hide');
    document.querySelector('.lower')!.classList.toggle('hide');
    document.querySelector('main')!.classList.toggle('hide');
  };

  const upperNavClick = (e: Event): void => {
    document
      .querySelector('.upper')!
      .querySelectorAll('a')!
      .forEach((anchor) => {
        anchor.classList.contains('active') &&
          anchor.classList.toggle('active');
      });
    (e.target as HTMLElement).classList.toggle('active');
    const temp = (e.target as HTMLElement).textContent!.toLowerCase();
    const planetName = temp.charAt(0).toUpperCase().concat(temp.slice(1));
    onChangePlanet(planetName);
    document
      .querySelector('.info')!
      .querySelectorAll('li')
      .forEach((listItem) => {
        listItem.classList.contains('active') &&
          listItem.classList.toggle('active');
      });
    document
      .querySelector('.info')!
      .querySelector('li')!
      .classList.toggle('active');
    document
      .querySelector('.lower')!
      .querySelectorAll('li')
      .forEach((listItem) => {
        listItem.classList.contains('active') &&
          listItem.classList.toggle('active');
      });
    document.querySelector('li')!.classList.toggle('active');
  };

  const buttonClick = (e: Event): void => {
    if ((e.target as HTMLElement).nodeName === 'LI') {
      !(e.target as HTMLElement)!.classList.contains('active') &&
        (e.target as HTMLElement)!.classList.toggle('active');
      document.querySelectorAll('li').forEach((listItem) => {
        listItem !== (e.target as HTMLElement) &&
          listItem.classList.contains('active') &&
          listItem.classList.toggle('active');
      });
      const listName = (e.target as HTMLElement)
        .textContent!.toLowerCase()
        .split(' ');
      listName[1] === 'overview'
        ? document.querySelector('li')!.classList.toggle('active')
        : listName[1] === 'internal'
        ? document.querySelectorAll('li')![1].classList.toggle('active')
        : document.querySelectorAll('li')![2].classList.toggle('active');
      const sec = listName.length === 2 ? listName[1] : listName[2];
      const imgName =
        sec === 'geology'
          ? 'geology'
          : sec === 'overview'
          ? 'planet'
          : 'internal';
      onChangeSec(sec, imgName);
    } else if ((e.target as HTMLElement).nodeName === 'SPAN') {
      !(e.target as HTMLElement).parentElement!.classList.contains('active') &&
        (e.target as HTMLElement).parentElement!.classList.toggle('active');
      document.querySelectorAll('li').forEach((listItem) => {
        listItem !== (e.target as HTMLElement).parentElement &&
          listItem.classList.contains('active') &&
          listItem.classList.toggle('active');
      });
      const listName = (e.target as HTMLElement)
        .parentElement!.textContent!.toLowerCase()
        .split(' ');
      listName[1] === 'overview'
        ? document.querySelector('li')!.classList.toggle('active')
        : listName[1] === 'internal'
        ? document.querySelectorAll('li')![1].classList.toggle('active')
        : document.querySelectorAll('li')![2].classList.toggle('active');
      const sec = listName.length === 2 ? listName[1] : listName[2];
      const imgName =
        sec === 'geology'
          ? 'geology'
          : sec === 'overview'
          ? 'planet'
          : 'internal';
      onChangeSec(sec, imgName);
    }
  };

  useEffect(() => {
    document
      .querySelector('.upper')!
      .querySelectorAll('a')
      .forEach((anch) => {
        anch.textContent === choice &&
          !anch.classList.contains('active') &&
          anch.classList.toggle('active');
      });
  }, [choice]);

  return (
    <div className="Page">
      <header>
        <div className="upper">
          <h1>THE PLANETS</h1>
          <img
            src={hamIcon}
            alt="menu"
            onClick={
              navClick as unknown as React.MouseEventHandler<HTMLImageElement>
            }
          />
          <nav aria-label='Planet'>
            <Link
              className="Mercury"
              to="/Mercury"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              MERCURY
            </Link>
            <Link
              className="Venus"
              to="/Venus"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              VENUS
            </Link>
            <Link
              className="Earth"
              to="/"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              EARTH
            </Link>
            <Link
              className="Mars"
              to="/Mars"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              MARS
            </Link>
            <Link
              className="Jupiter"
              to="/Jupiter"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              JUPITER
            </Link>
            <Link
              className="Saturn"
              to="/Saturn"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              SATURN
            </Link>
            <Link
              className="Uranus"
              to="/Uranus"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              URANUS
            </Link>
            <Link
              className="Neptune"
              to="/Neptune"
              onClick={
                upperNavClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
              }
            >
              NEPTUNE
            </Link>
          </nav>
        </div>
        <div className="lower">
          <nav aria-label='Section'>
            <ul className={planetClass}>
              <li
                className="active"
                onClick={
                  handleClick as unknown as React.MouseEventHandler<HTMLLIElement>
                }
              >
                OVERVIEW
              </li>
              <li
                onClick={
                  handleClick as unknown as React.MouseEventHandler<HTMLLIElement>
                }
              >
                STRUCTURE
              </li>
              <li
                onClick={
                  handleClick as unknown as React.MouseEventHandler<HTMLLIElement>
                }
              >
                SURFACE
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu hide">
          <nav aria-label='Planet'>
            <MenuDiv path="/Mercury" text="Mercury" onChangePlanet={onChangePlanet} />
            <MenuDiv
              path="/Venus"
              text="Venus"
              onChangePlanet={onChangePlanet}
            />
            <MenuDiv
              path="/"
              text="Earth"
              onChangePlanet={onChangePlanet}
            />
            <MenuDiv path="/Mars" text="Mars" onChangePlanet={onChangePlanet} />
            <MenuDiv
              path="/Jupiter"
              text="Jupiter"
              onChangePlanet={onChangePlanet}
            />
            <MenuDiv
              path="/Saturn"
              text="Saturn"
              onChangePlanet={onChangePlanet}
            />
            <MenuDiv
              path="/Uranus"
              text="Uranus"
              onChangePlanet={onChangePlanet}
            />
            <MenuDiv
              path="/Neptune"
              text="Neptune"
              onChangePlanet={onChangePlanet}
            />
          </nav>
        </div>
      </header>
      <main>
        <div className="topMain">
          {
            planetInfo['main']['secName'] === 'geology' && (
              <div className={`planetImg ${planetInfo['planetName']} geo`}>
                <Image path={planetInfo['main']['img']} alt="" />
                <Image path={`${planetInfo['main']['geoImg']}`} alt="" />
              </div>
            )
          }
          {
            planetInfo['main']['secName'] !== 'geology' && (
              <div className={`planetImg ${planetInfo['planetName']}`}>
                <Image path={planetInfo['main']['img']} alt="" />
              </div>
            )
          }
          <div className="info">
            <div className="details">
              <h2>{planetInfo['planetName'].toUpperCase()}</h2>
              <p>{planetInfo['main']['info']['content']}</p>
              <div className="facts">
                <span>
                  Source:{' '}
                  <a
                    href={planetInfo['main']['info']['source']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                </span>
                <Image path={sourceImg} alt="" />
              </div>
            </div>
            <nav aria-label='Section'>
              <ul className={planetClass}>
                <li
                  className="active"
                  onClick={
                    buttonClick as unknown as React.MouseEventHandler<HTMLLIElement>
                  }
                >
                  <span className="number">01</span>{' '}
                  <span className="list">OVERVIEW</span>
                </li>
                <li
                  onClick={
                    buttonClick as unknown as React.MouseEventHandler<HTMLLIElement>
                  }
                >
                  <span className="number">02</span>{' '}
                  <span className="list">INTERNAL STRUCTURE</span>
                </li>
                <li
                  onClick={
                    buttonClick as unknown as React.MouseEventHandler<HTMLLIElement>
                  }
                >
                  <span className="number">03</span>{' '}
                  <span className="list">SURFACE GEOLOGY</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="data">
          <DataDiv text="ROTATION TIME" data={planetInfo['rot']} />
          <DataDiv text="REVOLUTION TIME" data={planetInfo['revol']} />
          <DataDiv text="RADIUS" data={planetInfo['rad']} />
          <DataDiv text="AVERAGE TEMP." data={planetInfo['temp']} />
        </div>
      </main>
    </div>
  );
};

export default Planet;
