import React, { ReactElement, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Planet from './pages/Planet';
import data from './data.json';

export type info = {
  planetName: string;
  main: {
    secName: string;
    info: {
      content: string;
      source: string;
    };
    img: string;
    geoImg?: string;
  };
  rot: string;
  revol: string;
  rad: string;
  temp: string;
};

type setInfo = React.Dispatch<
  React.SetStateAction<{
    planetName: string;
    main: {
      secName: string;
      info: {
        content: string;
        source: string;
      };
      img: string;
      geoImg?: string;
    };
    rot: string;
    revol: string;
    rad: string;
    temp: string;
  }>
>;

const App = (): ReactElement => {
  const Planets = data;
  const pathName = useLocation().pathname;
  // The pathName's length = 1 ONLY  at the root
  const choice = pathName.length === 1 ? 'Earth' : pathName.slice(1);
  const [planetData, setPlanetData] = useState(
    Planets.filter((planet) => planet['name'] === choice)
  );
  const [infoSection, setInfoSection]: [info, setInfo] = useState({
    planetName: planetData[0]['name'],
    main: {
      secName: Object.keys(planetData[0])[1],
      info: planetData[0]['overview'],
      img: require(`${planetData[0]['images']['planet']}`),
    },
    rot: planetData[0]['rotation'],
    revol: planetData[0]['revolution'],
    rad: planetData[0]['radius'],
    temp: planetData[0]['temperature'],
  });

  const changePlanet = (name: string) => {
    const planetInfo = Planets.filter((planet) => planet['name'] === name);
    setInfoSection({
      planetName: planetInfo[0]['name'],
      main: {
        secName: Object.keys(planetInfo[0])[1],
        info: planetInfo[0]['overview'],
        img: require(`${planetInfo[0]['images']['planet']}`),
      },
      rot: planetInfo[0]['rotation'],
      revol: planetInfo[0]['revolution'],
      rad: planetInfo[0]['radius'],
      temp: planetInfo[0]['temperature'],
    });
    setPlanetData(planetInfo);
  };

  const changeSection = (
    sectionName: 'overview' | 'structure' | 'geology',
    imgSection: 'planet' | 'internal' | 'geology'
  ) => {
    sectionName !== 'geology'
      ? setInfoSection({
          planetName: planetData[0]['name'],
          main: {
            secName: sectionName,
            info: planetData[0][sectionName],
            img: require(`${planetData[0]['images'][imgSection]}`),
          },
          rot: planetData[0]['rotation'],
          revol: planetData[0]['revolution'],
          rad: planetData[0]['radius'],
          temp: planetData[0]['temperature'],
        })
      : setInfoSection({
          planetName: planetData[0]['name'],
          main: {
            secName: sectionName,
            info: planetData[0][sectionName],
            img: require(`${planetData[0]['images']['planet']}`),
            geoImg: require(`${planetData[0]['images'][imgSection]}`),
          },
          rot: planetData[0]['rotation'],
          revol: planetData[0]['revolution'],
          rad: planetData[0]['radius'],
          temp: planetData[0]['temperature'],
        });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/Mercury"
          element={
            <Planet
              planetClass="Mercury"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Venus"
          element={
            <Planet
              planetClass="Venus"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/"
          element={
            <Planet
              planetClass="Earth"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Mars"
          element={
            <Planet
              planetClass="Mars"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Jupiter"
          element={
            <Planet
              planetClass="Jupiter"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Saturn"
          element={
            <Planet
              planetClass="Saturn"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Uranus"
          element={
            <Planet
              planetClass="Uranus"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
        <Route
          path="/Neptune"
          element={
            <Planet
              planetClass="Neptune"
              planetInfo={infoSection}
              onChangeSec={changeSection}
              onChangePlanet={changePlanet}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
