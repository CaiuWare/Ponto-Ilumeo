import axios from 'axios'
// import { env } from "../../env"

const URL = 'http://localhost:3333'

export const findUser = async (id: string) => {
  try {
    const response = await axios.get(`${URL}/time/users/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching time:', error)
    throw error
  }
}
