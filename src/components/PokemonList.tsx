"use client"

import { Pokemon } from '@/types/pokemon'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/pokemons")
      const data = await response.json()
      setPokemons(data)
    }
    fetchData()
  },[])
  return (
    <div>
      {pokemons.length ===0 ? (
        <div>
          <p>로딩중 입니다...</p>
        </div>
      ) : (
        <div className='flex item-center flex-row flex-wrap'>
          {pokemons.map((pokemon)=> (
            <div key={pokemon.id} className='border-solid border-green-200 border-4 p-2 m-2 rounded-md'>
              <Link href={`pokemon/${pokemon.id}`}>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호 : {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokemonList