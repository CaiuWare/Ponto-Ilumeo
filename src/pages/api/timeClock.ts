import axios from 'axios'
// import { env } from '../../env'

export const getTime = async (userId: string) => {
  try {
    const response = await axios.get(`${URL}/time/${userId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching time:', error)
    throw error
  }
}
export const registerTime = async (userId: string) => {
  try {
    const response = await axios.post(`${URL}/time`, {
      userId,
    })
    return response.data
  } catch (error) {
    console.error('Error registering time:', error)
    throw error
  }
}
