import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon';

const Home = ({ data, hasError }) => {

  const display = () => {
    if (data.results) {
      let pokemons = data.results.map((elements, i) => {
        let pokename = elements.name;
        
        return (
          <div>
            <p>
              {pokename}
            </p>
          </div>
        )
      })
      return (
        <div>
          <div>
            {pokemons}
          </div>
        </div>
      )
    }
  }

  return (
    <Layout>
      {display()}
    </Layout>
  )
}

export const getServerSideProps = async(ctx) => {
  let response

  try {
    response = await axios(url)
    return { props: { data: response.data, hasError: false } }
  } catch (error) {
    console.log(error)
    return { props: { data: null, hasError: true } }
  }
}

export default Home