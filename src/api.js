import testResponce from "./calendarResponce";



const fetchDestinationCountriesUrl=`https://novit.ee/api/destinationCountry.php?option=allin`
const fetchCalendarUrl = `https://novit.ee/api/calendarFilter.php?option=allin`
const fetchCitiesListUrl = `https://novit.ee/api/destinationCity.php?option=allin`

const fetchDataAsync = async ({ url, params }) => {
    try {
        const response = await fetch(url + `&` + new URLSearchParams({
            ...params
        }));
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("An error occurred while fetching the data:", error);
    }
}


export const fetchDestinationCountries = async (params) => fetchDataAsync({ url: fetchDestinationCountriesUrl, params })


export const fetchCalendar = async (params) => fetchDataAsync({ url: fetchCalendarUrl ,params})


export const fetchCity = async (params) => fetchDataAsync({ url: fetchCitiesListUrl, params })


