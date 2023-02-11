import testResponce from "./calendarResponce";

// const fetchCalendarUrl = `https://novit.ee/wp-content/themes/astra/ajax_calendar_load.php`
const fetchCalendarUrl =  `https://novit.ee/api/calendarFilter.php?option=allin&country=T%C3%BCrgi&departure=Tallinn&city=Belek`
const fetchCitiesListUrl = `https://novit.ee/api/departureCity.php?option=allin`

const fetchDataAsync = async ({ url, params }) => {
    try {
        const response = await fetch(url + new URLSearchParams({
            ...params
        }));
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("An error occurred while fetching the data:", error);
    }
}



// export const testurl = "https://novit.ee/wp-content/themes/astra/ajax_calendar_load.php?dcity=Tallinn&country=T%C3%BCrgi"

export const fetchCalendar = async (params) => fetchDataAsync({ url: fetchCalendarUrl })

// export const fetchCalendar = testResponce.split(",").map(i => new Date(i))


export const fetchCity = async ({ params }) => fetchDataAsync({ url: fetchCalendarUrl, params })


