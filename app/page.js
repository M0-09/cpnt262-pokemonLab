"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Wrap this in a try catch and setError to true when there is an error in the catch.
    async function fetchPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        if (!res.ok) {
          setError(true);
        }

        // Use if logic to check if res.ok is true or false
        const data = await res.json();
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        setError(true);
        // console.error("Error fetching data:", error);
      }
    }

    fetchPokemon();
  }, []); // Bug: Incorrect dependency causes infinite loop

  if (loading)
    return <p className="text-lg text-center text-accent">Loading...</p>;

  // Add if statement and return a red p element when error
  if (error)
    return <p className="text-lg text-center text-red-600">Error...</p>;

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-center text-accent">
        Pokémon Explorer
      </h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemonList.map((pokemon, index) => (
          <li
            key={index}
            className="p-4 text-center transition transform bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-accent"
          >
            <Link
              href={`/pokemon/${index + 1}`}
              className="text-xl font-bold text-accent"
            >
              {pokemon.name}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
