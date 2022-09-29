/**
 * arquivo: src/services/Api.js
 * descrição: arquivo responsável por inicializar o axios e as requisições da url base dos HTTP's
 */

import axios from 'axios';

export default () => axios.create({
    // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
    baseURL: 'http://localhost:3000/api' 
});