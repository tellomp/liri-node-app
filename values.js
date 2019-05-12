exports.types = [
    {command: 'spotify', description: 'Search your favorite song, artist, or genre'},
    {command: 'movie', description: 'Search by movie or actor'},
    {command: 'concert', description: 'Search a concert by artist name'},

];
exports.typesPlain = exports.types.map(function(o) {
    return o.name + ' (' + o.description + ')'; // convert to one line
});