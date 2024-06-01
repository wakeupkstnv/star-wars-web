import React, { useState, useEffect } from 'react';
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import { BackgroundCircles } from '../components/design/Header';
import { heroBackground, robot } from "../assets";
import { BottomLine } from '../components/design/Hero';

const Planets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlanets = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://swapi.dev/api/planets/?search=${searchTerm}`);
                const data = await response.json();
                setPlanets(data.results);
            } catch (err) {
                setError('Failed to fetch planets');
            }
            setLoading(false);
        };

        fetchPlanets();
    }, [searchTerm]);

    return (
        <Section id="features">
            <div className='p-4 md:mt-[-6.5rem] md:p-10'>
                
            <div className="absolute -top-[54%] left-1/2 w-[248%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] rounded-3xl opacity-25">
                <img src={heroBackground}
                    className="w-full"
                    width={1440}
                    height={1800}
                    alt="bg"/>
            </div>
                <div className='flex justify-center items-center mb-4 md:mb-5'>
                    <input 
                        type="text" 
                        className="w-full max-w-xs px-4 py-2 rounded-3xl bg-slate-500 text-black border-black active:outline-none placeholder-inherit opacity-50 transition hover:opacity-75" 
                        placeholder="search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {loading ? (
                    <div className='text-center text-white'>Loading...</div>
                ) : error ? (
                    <div className='text-center text-red-500'>{error}</div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {planets.map((planet) => (
                            <div key={planet.name} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">{planet.name}</h3>
                                <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
                                <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
                                <p><strong>Diameter:</strong> {planet.diameter}</p>
                                <p><strong>Climate:</strong> {planet.climate}</p>
                                <p><strong>Terrain:</strong> {planet.terrain}</p>
                                <p><strong>Population:</strong> {planet.population}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <BackgroundCircles />
            <BottomLine />
        </Section>
    );
}

export default Planets;
