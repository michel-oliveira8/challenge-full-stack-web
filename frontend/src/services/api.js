import axios from 'axios';

export default {
  async getStudents() {
    const response = await axios.get('http://localhost:3001/students');
    return response.data;
  },

  async createStudents(editedItem) {
    const response = await axios.post('http://localhost:3001/student', editedItem);
    return response.data;
  },

  async editStudents(id, editedItem) {
    const response = await axios.patch(`http://localhost:3001/student/${id}`, editedItem);
    return response.data;
  },

  async deleteStudents(RA) {
    const response = await axios.delete(`http://localhost:3001/student/${RA}`);
    return response.data;
  },
};
