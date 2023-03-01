const fetchDestinationCountriesUrl = `https://novit.ee/api/destinationCountry.php?option=allin`
const fetchCalendarUrl = `https://novit.ee/api/calendarFilter.php?option=allin`
const fetchCitiesListUrl = `https://novit.ee/api/destinationCity.php?option=allin`
const fetchOffersUrl = 'https://novit.ee/api/searchOffers.php?option=allin'
const fetchHotelsUrl = `https://novit.ee/api/hotelAutofill.php?option=allin`
const fetchActualPriceUrl = `https://novit.ee/wp-content/themes/astra/order/ajax_price_custom.php?`



const fetchDataAsync = async ({ url, params, skipFirst }) => {
    try {
        const response = await fetch(url + (skipFirst ? "" : `&`) + new URLSearchParams({
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

export const fetchCities = async (params) => fetchDataAsync({ url: fetchCitiesListUrl, params })

export const fetchHotels = async (params) => fetchDataAsync({ url: fetchHotelsUrl, params })

export const fetchOffers = async (params) => fetchDataAsync({ url: fetchOffersUrl, params })

export const fetchActualPrice = async (params) => fetchDataAsync({ url: fetchActualPriceUrl, params, skipFirst: true })
