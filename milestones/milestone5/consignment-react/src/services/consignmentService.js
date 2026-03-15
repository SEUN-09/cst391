import axios from 'axios';

const API_URL = 'http://localhost:3000/api/consignments';

export const getAllConsignments = () => axios.get(API_URL);
export const getConsignmentById = (id) => axios.get(`${API_URL}/${id}`);
export const createConsignment = (data) => axios.post(API_URL, data);
export const updateConsignment = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteConsignment = (id) => axios.delete(`${API_URL}/${id}`);