// {dcity:Tallinn,country:Bulgaaria}
// const fetchCalendarUrl=`https://novit.ee/wp-content/themes/astra/ajax_calendar_load.php?dcity=Tallinn&country=Bulgaaria
const fetchCalendarUrl = `https://novit.ee/wp-content/themes/astra/ajax_calendar_load.php`

const fetchCitiesListUrl=`https://novit.ee/wp-content/themes/astra/ajax_city_load.php`

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

const fetchCalendar = async ({ params }) => fetchDataAsync({ url: fetchCalendarUrl, params })