"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} location
 * @return {boolean}
 */
function pageHasTitle(location) {
    var pathName = location.pathname;
    var pagesWithTitle = [
        '/charts',
        '/patients',
        '/'
    ];
    return pagesWithTitle.indexOf(pathName) !== -1;
}
exports.pageHasTitle = pageHasTitle;
