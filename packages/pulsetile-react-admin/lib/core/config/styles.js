"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var memoize_1 = __importDefault(require("lodash/memoize"));
var deepmerge_1 = __importDefault(require("deepmerge"));
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../version/config/theme.config");
exports.ITEMS_PER_PAGE = 10;
var defaultLightPalette = {
    type: 'light',
    mainColor: "#0D672F",
    secondaryMainColor: "#0D672F",
    tableHeadColor: "#c5e39f",
    dangerColor: "#da534f",
    viewButton: "#30ad57",
    disabledColor: "#e9e4e4",
    borderColor: "#e5e5e5",
    paperColor: "#fff",
    toolbarColor: "#e5e5e5",
    fontColor: "#000",
    topbarButton: "#757575",
    menuItemsColor: "#3E3E3E",
};
var defaultDarkPalette = {
    type: 'dark',
    mainColor: "#000",
    secondaryMainColor: "#000",
    tableHeadColor: "#e8e8e8",
    dangerColor: "#000",
    viewButton: "#000",
    disabledColor: "#e9e4e4",
    borderColor: "#000",
    paperColor: "#fff",
    fontColor: "#000",
    toolbarColor: "#fff",
    background: "#fff",
    text: "#000",
    divider: "#000",
    topbarButton: "#000",
    menuItemsColor: "#000",
};
/**
 * This function defined background-rule for Patient Summary panels and for table headings
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {boolean} isContrastMode
 * @param {string}  themeColor
 * @param {string}  imageName
 * @return {string}
 */
function getBackground(isContrastMode, themeColor, imageName) {
    var cardBackgroundImage = get_1.default(theme_config_1.themeImages, imageName, null);
    var result = themeColor;
    if (cardBackgroundImage) {
        result = "url(" + cardBackgroundImage + ") 0 0 repeat";
    }
    return (isContrastMode) ? "#000" : result;
}
function getCurrentPalette(isContrastMode) {
    return isContrastMode
        ? deepmerge_1.default(defaultDarkPalette, window.config.darkPalette)
        : deepmerge_1.default(defaultLightPalette, window.config.lightPalette);
}
/**
 * This function returns current theme settings
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
function getCurrentTheme(isContrastMode) {
    var backgroundImage = isContrastMode ? null : get_1.default(theme_config_1.themeImages, 'backgroundImage', null);
    var palette = getCurrentPalette(isContrastMode);
    var isOldDesign = get_1.default(window, 'config.isOldDesign', false);
    var isRectangleButtons = get_1.default(window, 'config.isRectangleButtons', false);
    var isTableHeaderInverted = get_1.default(theme_config_1.themeCommonElements, 'invertedTableHeaders', false);
    var tableHeaderColor = isTableHeaderInverted ? palette.tableHeadColor : palette.secondaryMainColor;
    return styles_1.createMuiTheme({
        palette: palette,
        isOldDesign: isOldDesign,
        isRectangleButtons: isRectangleButtons,
        typography: {
            fontFamily: '"HK Grotesk Regular", Arial, sans-serif',
            fontSize: 14,
        },
        tableHeader: {
            tableHeaderBlock: {
                background: getBackground(isContrastMode, tableHeaderColor, 'tableHeaderImage'),
            },
        },
        patientSummaryPanel: {
            container: {
                background: "url(" + backgroundImage + ")",
            },
            topBlock: {
                background: getBackground(isContrastMode, palette.secondaryMainColor, 'cardBackgroundImage'),
            }
        },
        overrides: {
            MuiInput: {
                root: {
                    border: "1px solid " + palette.borderColor,
                }
            },
            MuiList: {
                root: {
                    backgroundColor: palette.paperColor,
                }
            },
            MuiPaper: {
                elevation1: {
                    boxShadow: "none",
                    backgroundColor: palette.paperColor,
                }
            },
            MuiTable: {
                root: {
                    backgroundColor: palette.paperColor,
                    border: "1px solid " + palette.borderColor,
                }
            },
            MuiTableHead: {
                root: {
                    backgroundColor: isContrastMode ? palette.paperColor : palette.borderColor,
                    color: isContrastMode ? palette.paperColor : palette.fontColor,
                }
            },
            MuiTableRow: {
                head: {
                    height: 48,
                }
            },
            MuiTableCell: {
                head: {
                    color: palette.fontColor,
                    fontSize: 16,
                    fontWeight: 800,
                },
                paddingNone: {
                    paddingLeft: 10,
                }
            },
            MuiTypography: {
                root: {
                    fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
                    fontSize: 17,
                },
                body1: {
                    fontFamily: '"HK Grotesk Regular", Arial, sans-serif',
                    fontSize: 14,
                },
                body2: {
                    fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
                    fontSize: 14,
                },
                h3: {
                    fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
                    fontSize: 16,
                }
            },
        }
    });
}
exports.default = memoize_1.default(getCurrentTheme);
