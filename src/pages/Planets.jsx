import React from 'react'
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import { BackgroundCircles } from '../components/design/Header';
import { heroBackground, robot } from "../assets";
import { BottomLine } from '../components/design/Hero';


const Planets = () => {
    const planets = [{
        "count": 60, 
        "next": "https://swapi.dev/api/planets/?page=2", 
        "previous": null, 
        "results": [
            {
                "name": "Tatooine", 
                "rotation_period": "23", 
                "orbital_period": "304", 
                "diameter": "10465", 
                "climate": "arid", 
                "gravity": "1 standard", 
                "terrain": "desert", 
                "surface_water": "1", 
                "population": "200000", 
                "residents": [
                    "https://swapi.dev/api/people/1/", 
                    "https://swapi.dev/api/people/2/", 
                    "https://swapi.dev/api/people/4/", 
                    "https://swapi.dev/api/people/6/", 
                    "https://swapi.dev/api/people/7/", 
                    "https://swapi.dev/api/people/8/", 
                    "https://swapi.dev/api/people/9/", 
                    "https://swapi.dev/api/people/11/", 
                    "https://swapi.dev/api/people/43/", 
                    "https://swapi.dev/api/people/62/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/4/", 
                    "https://swapi.dev/api/films/5/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-09T13:50:49.641000Z", 
                "edited": "2014-12-20T20:58:18.411000Z", 
                "url": "https://swapi.dev/api/planets/1/"
            }, 
            {
                "name": "Alderaan", 
                "rotation_period": "24", 
                "orbital_period": "364", 
                "diameter": "12500", 
                "climate": "temperate", 
                "gravity": "1 standard", 
                "terrain": "grasslands, mountains", 
                "surface_water": "40", 
                "population": "2000000000", 
                "residents": [
                    "https://swapi.dev/api/people/5/", 
                    "https://swapi.dev/api/people/68/", 
                    "https://swapi.dev/api/people/81/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T11:35:48.479000Z", 
                "edited": "2014-12-20T20:58:18.420000Z", 
                "url": "https://swapi.dev/api/planets/2/"
            }, 
            {
                "name": "Yavin IV", 
                "rotation_period": "24", 
                "orbital_period": "4818", 
                "diameter": "10200", 
                "climate": "temperate, tropical", 
                "gravity": "1 standard", 
                "terrain": "jungle, rainforests", 
                "surface_water": "8", 
                "population": "1000", 
                "residents": [], 
                "films": [
                    "https://swapi.dev/api/films/1/"
                ], 
                "created": "2014-12-10T11:37:19.144000Z", 
                "edited": "2014-12-20T20:58:18.421000Z", 
                "url": "https://swapi.dev/api/planets/3/"
            }, 
            {
                "name": "Hoth", 
                "rotation_period": "23", 
                "orbital_period": "549", 
                "diameter": "7200", 
                "climate": "frozen", 
                "gravity": "1.1 standard", 
                "terrain": "tundra, ice caves, mountain ranges", 
                "surface_water": "100", 
                "population": "unknown", 
                "residents": [], 
                "films": [
                    "https://swapi.dev/api/films/2/"
                ], 
                "created": "2014-12-10T11:39:13.934000Z", 
                "edited": "2014-12-20T20:58:18.423000Z", 
                "url": "https://swapi.dev/api/planets/4/"
            }, 
            {
                "name": "Dagobah", 
                "rotation_period": "23", 
                "orbital_period": "341", 
                "diameter": "8900", 
                "climate": "murky", 
                "gravity": "N/A", 
                "terrain": "swamp, jungles", 
                "surface_water": "8", 
                "population": "unknown", 
                "residents": [], 
                "films": [
                    "https://swapi.dev/api/films/2/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T11:42:22.590000Z", 
                "edited": "2014-12-20T20:58:18.425000Z", 
                "url": "https://swapi.dev/api/planets/5/"
            }, 
            {
                "name": "Bespin", 
                "rotation_period": "12", 
                "orbital_period": "5110", 
                "diameter": "118000", 
                "climate": "temperate", 
                "gravity": "1.5 (surface), 1 standard (Cloud City)", 
                "terrain": "gas giant", 
                "surface_water": "0", 
                "population": "6000000", 
                "residents": [
                    "https://swapi.dev/api/people/26/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/2/"
                ], 
                "created": "2014-12-10T11:43:55.240000Z", 
                "edited": "2014-12-20T20:58:18.427000Z", 
                "url": "https://swapi.dev/api/planets/6/"
            }, 
            {
                "name": "Endor", 
                "rotation_period": "18", 
                "orbital_period": "402", 
                "diameter": "4900", 
                "climate": "temperate", 
                "gravity": "0.85 standard", 
                "terrain": "forests, mountains, lakes", 
                "surface_water": "8", 
                "population": "30000000", 
                "residents": [
                    "https://swapi.dev/api/people/30/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/3/"
                ], 
                "created": "2014-12-10T11:50:29.349000Z", 
                "edited": "2014-12-20T20:58:18.429000Z", 
                "url": "https://swapi.dev/api/planets/7/"
            }, 
            {
                "name": "Naboo", 
                "rotation_period": "26", 
                "orbital_period": "312", 
                "diameter": "12120", 
                "climate": "temperate", 
                "gravity": "1 standard", 
                "terrain": "grassy hills, swamps, forests, mountains", 
                "surface_water": "12", 
                "population": "4500000000", 
                "residents": [
                    "https://swapi.dev/api/people/3/", 
                    "https://swapi.dev/api/people/21/", 
                    "https://swapi.dev/api/people/35/", 
                    "https://swapi.dev/api/people/36/", 
                    "https://swapi.dev/api/people/37/", 
                    "https://swapi.dev/api/people/38/", 
                    "https://swapi.dev/api/people/39/", 
                    "https://swapi.dev/api/people/42/", 
                    "https://swapi.dev/api/people/60/", 
                    "https://swapi.dev/api/people/61/", 
                    "https://swapi.dev/api/people/66/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/4/", 
                    "https://swapi.dev/api/films/5/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T11:52:31.066000Z", 
                "edited": "2014-12-20T20:58:18.430000Z", 
                "url": "https://swapi.dev/api/planets/8/"
            }, 
            {
                "name": "Coruscant", 
                "rotation_period": "24", 
                "orbital_period": "368", 
                "diameter": "12240", 
                "climate": "temperate", 
                "gravity": "1 standard", 
                "terrain": "cityscape, mountains", 
                "surface_water": "unknown", 
                "population": "1000000000000", 
                "residents": [
                    "https://swapi.dev/api/people/34/", 
                    "https://swapi.dev/api/people/55/", 
                    "https://swapi.dev/api/people/74/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/4/", 
                    "https://swapi.dev/api/films/5/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T11:54:13.921000Z", 
                "edited": "2014-12-20T20:58:18.432000Z", 
                "url": "https://swapi.dev/api/planets/9/"
            }, 
            {
                "name": "Kamino", 
                "rotation_period": "27", 
                "orbital_period": "463", 
                "diameter": "19720", 
                "climate": "temperate", 
                "gravity": "1 standard", 
                "terrain": "ocean", 
                "surface_water": "100", 
                "population": "1000000000", 
                "residents": [
                    "https://swapi.dev/api/people/22/", 
                    "https://swapi.dev/api/people/72/", 
                    "https://swapi.dev/api/people/73/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/5/"
                ], 
                "created": "2014-12-10T12:45:06.577000Z", 
                "edited": "2014-12-20T20:58:18.434000Z", 
                "url": "https://swapi.dev/api/planets/10/"
            }
        ]
    }];

    return (
        <Section id="features">
        <div className='p-10 md:mt-[-8rem]'>
          <div className='grid grid-cols-2 md:ml-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {planets[0].results.map((planet) => (
                <div key={planet.name} className="bg-gray-800/100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-5">{planet.name}</h3>
                    <p><strong>Rotation Period:</strong> {planet.rotation_period} cm</p>
                    <p><strong>Orbital period:</strong> {planet.orbital_period} kg</p>
                    <p><strong>Diameter:</strong> {planet.diameter}</p>
                    <p><strong>Climate:</strong> {planet.climate}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Population:</strong> {planet.population}</p>
                </div>
            ))}
          </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[248%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] rounded-3xl opacity-25">
            <img src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="bg"/>
        </div>
          <BackgroundCircles />
          <BottomLine />
        </Section>
    );
}

export default Planets;
