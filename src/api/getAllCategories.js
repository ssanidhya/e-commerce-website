import axios from 'axios';
const BaseURL = 'https://api.escuelajs.co/api/v1'

export const getAllCategories =  async () =>{
    const url = `${BaseURL}/categories`;
    try{
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
}