import axios from 'axios'
const baseUrl = 'https://lettera.api.ksfmedia.fi/v2/'


export const getArticle = uuid => {
    return axios.get(`${baseUrl}article/${uuid}?`)
}
