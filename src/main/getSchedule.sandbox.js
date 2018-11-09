import axios from 'axios';
import cheerio from 'cheerio';

const getSchedule = async () => {
    try {
        // console.log('getting schedule');
        const result = await axios.get('https://www.moviepass.com/movies/');
        // console.log('got schedule (movies page):', result);
        console.log(parseSchedule(result.data));
    } catch (err) {
        console.error('error getting schedule', err.message, err.stack);
    }
};

/**
 * Get the schedule data from the /movies page HTML
 */
const parseSchedule = (html) => {
    console.log('parsing schedule', html.length);
    const $ = cheerio.load(html);
    /*
        h3.movie-header => the date
        div.outer-wrapper
     */
    const dates = $('#createMoviesForTheWeek .movie-header').map(x => x.text());
    // return dates;
    return $('#createMoviesForTheWeek').find($('.movie-header')).length;
    // return $('#createMoviesForTheWeek');
    // return $.html();
};

export default getSchedule;