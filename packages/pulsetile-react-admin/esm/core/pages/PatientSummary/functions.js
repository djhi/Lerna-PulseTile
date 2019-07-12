import get from "lodash/get";
import { themeImages } from "../../../version/config/theme.config";
export function getSummaryContainerStyles(synopsisData) {
    var data = {};
    data.margin = 0;
    data.width = "100%";
    var cardBackgroundImage = get(themeImages, 'cardBackgroundImage', null);
    var transforms = [
        'translate(-5px, -98px)',
        'translate(105px, 12px)',
        'rotate(69deg) translate(82px, 31px)',
        'rotate(-110deg) translate(83px, 89px)',
        'rotate(90deg) translate(59px, 6px)',
    ];
    var count = 0;
    synopsisData.map(function (item, key) {
        if (key === transforms.length) {
            count = 0;
        }
        data['& #' + item.id + ':before'] = {
            content: '""',
            position: "absolute",
            width: 300,
            height: 300,
            left: 0,
            right: 0,
            zIndex: 999999,
            background: "url(" + cardBackgroundImage + ") 0 0 repeat",
            backgroundSize: "contain",
            transform: transforms[count],
        };
        count++;
    });
    return data;
}
