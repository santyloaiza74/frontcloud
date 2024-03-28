const API_URL_LOGIN='http://127.0.0.1:3300'
const API_URL='http://127.0.0.1:3300/api/v1'

const URL={
    USER: `${API_URL}/users`,
    LOGIN: `${API_URL_LOGIN}/login`,
    COMPRADORS:`${API_URL}/compradors`,
    VENDEDORS: `${API_URL}/vendedors`,
    PRODUCTOS: `${API_URL}/productos`,
    PUJAS: `${API_URL}/pujas`,
    SUBASTAS: `${API_URL}/subastas`,
    VENTAS:`${API_URL}/ventas`,
    REGISTER: `${API_URL_LOGIN}/login/register`,
}

export default URL