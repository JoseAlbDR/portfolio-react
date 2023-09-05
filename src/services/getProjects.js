import axios from 'axios'

export const getProjects = async () => {
  try {
    const projects = await axios.get(`${import.meta.env.VITE_URL}/projects`)
    return projects.data
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching projects')
  }
}
