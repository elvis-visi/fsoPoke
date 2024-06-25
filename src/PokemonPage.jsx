import React, {  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonAbility from './PokemonAbility'

const PokemonPage = () => {
  const { id } = useParams()
  const { data, error, loading } = useApi(`https://pokeapi.co/api/v2/pokemon/${id}`)

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('PokemonPage mounted')
  }, [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>Abilities</h2>
      <ul>
        {data.abilities.map(ability => (
          <PokemonAbility key={ability.ability.name} ability={ability.ability} />
        ))}
      </ul>
    </div>
  )
}

export default PokemonPage
