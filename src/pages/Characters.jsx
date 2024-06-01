import React, { useState, useEffect } from 'react';
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import { BackgroundCircles } from '../components/design/Header';
import { heroBackground, robot } from "../assets";
import { BottomLine } from '../components/design/Hero';

const Characters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
                const data = await response.json();
                setCharacters(data.results);
            } catch (err) {
                setError('Failed to fetch characters');
            }
            setLoading(false);
        };

        fetchCharacters();
    }, [searchTerm]);

    return (
        <Section id="features">
            <div className="absolute -top-[54%] left-1/2 w-[248%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] rounded-3xl opacity-25">
                <img src={heroBackground}
                    className="w-full"
                    width={1440}
                    height={1800}
                    alt="bg"/>
            </div>
            <div className='p-4 md:mt-[-6.5rem] md:p-10'>
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
                        {characters.map((character) => (
                            <div key={character.name} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:bg-gray-900">
                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">{character.name}</h3>
                                <p><strong>Height:</strong> {character.height} cm</p>
                                <p><strong>Mass:</strong> {character.mass} kg</p>
                                <p><strong>Hair Color:</strong> {character.hair_color}</p>
                                <p><strong>Skin Color:</strong> {character.skin_color}</p>
                                <p><strong>Eye Color:</strong> {character.eye_color}</p>
                                <p><strong>Birth Year:</strong> {character.birth_year}</p>
                                <p><strong>Gender:</strong> {character.gender}</p>
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

export default Characters;
