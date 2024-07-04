import { fetchPokemonData } from '@/apis/pokemon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PokemonDetail = async({ params } : {params : {id : string} }) => {
  const pokemonData = await fetchPokemonData(params.id)

  console.log(pokemonData)
  return (
    <>
      <div className='flex flex-col'>
        <div className='mx-auto  border-solid border-2 border-sky-500 m-2 p-3 w-[700px]'>
          <div>
            <Image 
              src={pokemonData.sprites.front_default}
              alt={pokemonData.korean_name}
              width={105}
              height={105}
            />
          </div>
          <div className='text-xl'>
            <p>이름 : {pokemonData.korean_name}</p>
            <p>키 : {pokemonData.height / 10} m</p>
            <p>몸무게 : {pokemonData.weight / 10} kg</p>
          </div>
          <div className='mt-2'>
            <p className='text-xl'>기술 </p>
            <div>
              {pokemonData.moves.map((move)=> (
                <span key={move.move.name} className='m-1'>{move.move.korean_name}</span>
              ))}
            </div>
          </div>
          <button className='border-solid border-2 border-sky-500 bg-sky-500 p-2 m-2 text-white'>
            <Link href='/'>
              뒤로가기
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default PokemonDetail