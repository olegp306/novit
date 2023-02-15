import testResponce from "./calendarResponce";



const fetchDestinationCountriesUrl = `https://novit.ee/api/destinationCountry.php?option=allin`
const fetchCalendarUrl = `https://novit.ee/api/calendarFilter.php?option=allin`
const fetchCitiesListUrl = `https://novit.ee/api/destinationCity.php?option=allin`
const fetchOffersUrl = 'https://novit.ee/api/searchOffers.php?option=allin '
const fetchHotelsUrl = `https://novit.ee/api/hotelAutofill.php?option=allin`

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


export const fetchCalendar = async (params) => fetchDataAsync({ url: fetchCalendarUrl, params })

export const fetchCity = async (params) => fetchDataAsync({ url: fetchCitiesListUrl, params })

export const fetchHotels = fetchDataAsync({ url: fetchHotelsUrl, params })

export const fetchOffers = async (params) => fetchDataAsync({ url: fetchOffersUrl, params })

