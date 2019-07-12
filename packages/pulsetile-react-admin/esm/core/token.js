/**
 * This function extract token from COOKIE and returns it
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function getTokenFromCookie() {
    var result = null;
    var decodedCookie = decodeURIComponent(document.cookie).split(';');
    decodedCookie.forEach(function (item) {
        var itemArray = item.split('=');
        var parameterName = itemArray[0];
        if (parameterName.trim() === "JSESSIONID") {
            result = itemArray[1];
        }
    });
    return result;
}
/**
 * This function returns domain name from windoe config settings
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function getDomainName() {
    return (window && window.config) ? window.config.domainName : null;
}
export var token = getTokenFromCookie();
export var domainName = getDomainName();
