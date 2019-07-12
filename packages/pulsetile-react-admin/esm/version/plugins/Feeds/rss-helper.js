var removeSpecialCharacters = function (text) {
    return text.replace(/&.+?;/gi, '').trim();
};
var getRssItemProperty = function (el, prop) {
    var propTag = el.getElementsByTagName(prop)[0];
    if (propTag) {
        return removeSpecialCharacters(propTag.textContent);
    }
    return null;
};
export var getRssFeedsListFromXML = function (xmlDocument) {
    if (!xmlDocument.getElementsByTagName)
        return [];
    var feedsItemsEls = xmlDocument.getElementsByTagName('item');
    return Array.prototype.reduce.call(feedsItemsEls, function (prevValue, el) {
        var feedInfo = {};
        feedInfo['title'] = getRssItemProperty(el, 'title');
        feedInfo['link'] = getRssItemProperty(el, 'link');
        var thumbnailEl = el.getElementsByTagName('media:thumbnail')[0];
        if (thumbnailEl && thumbnailEl.attributes && thumbnailEl.attributes.url) {
            feedInfo['thumbnail'] = thumbnailEl.attributes.url.textContent;
        }
        var contentEl = el.getElementsByTagName('media:content')[0];
        if (contentEl && contentEl.attributes && contentEl.attributes.url) {
            feedInfo['thumbnail'] = contentEl.attributes.url.textContent;
        }
        prevValue.push(feedInfo);
        return prevValue;
    }, []);
};
