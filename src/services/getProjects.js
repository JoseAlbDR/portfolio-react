import axios from 'axios'
import _ from 'lodash'

export const getProjects = async () => {
  try {
    const projects = await axios.get(`http://localhost:3001/api/v1/projects`)
    return projects.data
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching projects')
  }
}
