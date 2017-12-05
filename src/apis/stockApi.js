const ALPHAVANTAGE_API_KEY = 'SOIKZYCZGKZ6HPR4';
const ROOT_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&'

export const AlphaVantage = (symbol) => {
  const url = `${ROOT_URL}symbol=${symbol}&interval=1min&apikey=${ALPHAVANTAGE_API_KEY}`
  return fetch(url).then((response) => { 
    return response.json();
  });
}
