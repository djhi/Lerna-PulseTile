/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} location
 * @return {boolean}
 */
export function pageHasTitle(location) {
    var pathName = location.pathname;
    var pagesWithTitle = [
        '/charts',
        '/patients',
        '/'
    ];
    return pagesWithTitle.indexOf(pathName) !== -1;
}
