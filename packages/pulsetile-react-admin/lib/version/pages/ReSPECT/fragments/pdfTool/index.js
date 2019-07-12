"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var get_1 = __importDefault(require("lodash/get"));
var pdfkit_1 = __importDefault(require("@react-pdf/pdfkit"));
var blob_stream_1 = __importDefault(require("blob-stream"));
require("brace/mode/javascript");
require("brace/theme/monokai");
var page1_1 = __importDefault(require("./page1"));
var page2_1 = __importDefault(require("./page2"));
var cprVariants_1 = require("../../fragments/cprVariants");
var statuses_1 = require("../../statuses");
function address(personalDetails) {
    var arr = [];
    var streetAddress = get_1.default(personalDetails, 'streetAddress', null);
    var addressSecondLine = get_1.default(personalDetails, 'addressSecondLine', null);
    var city = get_1.default(personalDetails, 'city', null);
    var country = get_1.default(personalDetails, 'country', null);
    var county = get_1.default(personalDetails, 'county', null);
    var postCode = get_1.default(personalDetails, 'postCode', null);
    if (streetAddress) {
        arr.push(streetAddress);
    }
    if (addressSecondLine) {
        arr.push(addressSecondLine);
    }
    if (city) {
        arr.push(city);
    }
    if (country) {
        arr.push(country);
    }
    if (county) {
        arr.push(county);
    }
    if (postCode) {
        arr.push(postCode);
    }
    return arr.join(', ');
}
function getDDMMMYYYY(date) {
    return moment_1.default(date).isValid() ? moment_1.default(date).format(statuses_1.DATE_FORMAT) : null;
}
function getClinicalRecommendations(obj) {
    var focusValue = get_1.default(obj, 'clinicalRecommendations.focusValue', null);
    if (!focusValue) {
        return null;
    }
    else if (focusValue === cprVariants_1.FOCUS_LEFT) {
        return 5;
    }
    else if (focusValue === cprVariants_1.FOCUS_RIGHT) {
        return 95;
    }
    else if (focusValue === 50) {
        return 50;
    }
}
function getWrappedText(text, rowLength) {
    if (!text || text === "") {
        return null;
    }
    var stringText = text.toString();
    var textArray = stringText.split(' ');
    var rows = [];
    var currentRow = '';
    var currentRowArray = [];
    for (var i = 0, n = textArray.length; i < n; i++) {
        var item = textArray[i];
        if ((currentRow.length + item.length) <= rowLength) {
            currentRow += item + ' ';
            currentRowArray.push(item);
        }
        else {
            rows.push(currentRowArray.join(' '));
            currentRow = item + ' ';
            currentRowArray = [];
            currentRowArray.push(item);
        }
    }
    if (currentRowArray.length > 0) {
        rows.push(currentRowArray.join(' '));
    }
    return rows;
}
function getSectionFourCpr(obj) {
    var cprValue = get_1.default(obj, 'clinicalRecommendations.cprValue', null);
    var result = null;
    switch (cprValue) {
        case 'CPRRecommended':
            result = 100;
            break;
        case 'ModifiedCPR':
            result = 300;
            break;
        case 'NotforCPR':
            result = 500;
            break;
    }
    return result;
}
exports.default = (function (obj, patientInfo) {
    var personalDetails = {
        preferredName: get_1.default(patientInfo, 'prefix', null),
        firstName: get_1.default(patientInfo, 'firstName', null),
        surname: get_1.default(patientInfo, 'lastName', null),
        streetAddress: get_1.default(patientInfo, 'address', null),
        addressSecondLine: "",
        city: get_1.default(patientInfo, 'city', null),
        county: get_1.default(patientInfo, 'district', null),
        postCode: get_1.default(patientInfo, 'postCode', null),
        country: get_1.default(patientInfo, 'country', null),
        nhsNumber: get_1.default(patientInfo, 'nhsNumber', null),
        birthDate: get_1.default(patientInfo, 'birthDate', null),
    };
    var doc = new pdfkit_1.default();
    var stream = doc.pipe(blob_stream_1.default());
    var seniorClinician;
    var clinicians = [];
    var signaturesArray = get_1.default(obj, 'clinicalSignatures.signaturesArray', []);
    var signaturesNumber = signaturesArray.length;
    for (var i = 0; i < signaturesNumber; i++) {
        var item = signaturesArray[i];
        if (item.isSrc) {
            seniorClinician = item;
        }
        else {
            clinicians.push(item);
        }
    }
    var form = {
        preferredName: get_1.default(personalDetails, 'preferredName', null),
        fullName: get_1.default(personalDetails, 'firstName', null) + ' ' + get_1.default(personalDetails, 'surname', null),
        dateOfBirth: getDDMMMYYYY(get_1.default(personalDetails, 'birthDate', null)),
        dateCompleted: get_1.default(personalDetails, 'dateCompleted', null),
        chiNumber: get_1.default(personalDetails, 'nhsNumber', null),
        address: address(personalDetails),
        sectionTwoDiagnostics: get_1.default(obj, 'summaryInformation.summary', null),
        sectionTwoDetails: get_1.default(obj, 'summaryInformation.details', null),
        sectionThreeX: get_1.default(obj, 'personalPreferences.preferencesValue', null),
        sectionThreeDetails: get_1.default(obj, 'personalPreferences.preferencesText', null),
        sectionFourClinicalRecommendationsX: getClinicalRecommendations(obj),
        sectionFourClinicalRecommendations: get_1.default(obj, 'clinicalRecommendations.clinicalGuidance', null),
        sectionFourCprX: getSectionFourCpr(obj),
        sectionFiveCapacity: get_1.default(obj, 'capacityAndRepresentation.capacityFirst', null),
        sectionFiveLegalProxy: get_1.default(obj, 'capacityAndRepresentation.legalProxyValue', null),
        sectionSixA: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetA'),
        sectionSixB: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetB'),
        sectionSixC: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetC'),
        sectionSixC1: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetC1'),
        sectionSixC2: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetC2'),
        sectionSixC3: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetC3'),
        sectionSixD: (get_1.default(obj, 'involvement.involvementValue', null) === 'valueSetD'),
        sectionSixNotSelectingReason: get_1.default(obj, 'involvement.notSelectingReason', null),
        sectionSixDocumentExplanation: get_1.default(obj, 'involvement.documentExplanation', null),
        sectionSevenClinician1: {
            designation: (clinicians[0] ? clinicians[0].designation : ''),
            name: (clinicians[0] ? clinicians[0].clinicialName : ''),
            number: (clinicians[0] ? clinicians[0].gmcNumber : ''),
            dateTime: (clinicians[0] ? getDDMMMYYYY(clinicians[0].dateAndTime) : '')
        },
        sectionSevenClinician2: {
            designation: (clinicians[1] ? clinicians[1].designation : ''),
            name: (clinicians[1] ? clinicians[1].clinicialName : ''),
            number: (clinicians[1] ? clinicians[1].gmcNumber : ''),
            dateTime: (clinicians[1] ? getDDMMMYYYY(clinicians[1].dateAndTime) : '')
        },
        sectionSevenSeniorClinician: {
            designation: (seniorClinician ? seniorClinician.designation : ''),
            name: (seniorClinician ? seniorClinician.clinicialName : ''),
            number: (seniorClinician ? seniorClinician.gmcNumber : ''),
            dateTime: (seniorClinician ? getDDMMMYYYY(seniorClinician.dateAndTime) : '')
        },
        sectionEightContact1: {
            role: get_1.default(obj, 'emergencyContacts.contactsArray[0].role', null),
            name: get_1.default(obj, 'emergencyContacts.contactsArray[0].name', null),
            telephone: get_1.default(obj, 'emergencyContacts.contactsArray[0].phone', null),
            details: get_1.default(obj, 'emergencyContacts.contactsArray[0].details', null),
        },
        sectionEightContact2: {
            role: get_1.default(obj, 'emergencyContacts.contactsArray[1].role', null),
            name: get_1.default(obj, 'emergencyContacts.contactsArray[1].name', null),
            telephone: get_1.default(obj, 'emergencyContacts.contactsArray[1].phone', null),
            details: get_1.default(obj, 'emergencyContacts.contactsArray[1].details', null),
        },
        sectionEightContact3: {
            role: get_1.default(obj, 'secons.emergencyContacts.contactsArray[2].role', null),
            name: get_1.default(obj, 'emergencyContacts.contactsArray[2].name', null),
            telephone: get_1.default(obj, 'emergencyContacts.contactsArray[2].phone', null),
            details: get_1.default(obj, 'emergencyContacts.contactsArray[2].details', null),
        },
        sectionEightContact4: {
            role: get_1.default(obj, 'emergencyContacts.contactsArray[3].role', null),
            name: get_1.default(obj, 'emergencyContacts.contactsArray[3].name', null),
            telephone: get_1.default(obj, 'emergencyContacts.contactsArray[3].phone', null),
            details: get_1.default(obj, 'emergencyContacts.contactsArray[3].details', null),
        },
        sectionNineConfirmation1: {
            reviewDate: getDDMMMYYYY(get_1.default(obj, 'confirmation.confirmationsArray[0].reviewDate', null)),
            designation: get_1.default(obj, 'confirmation.confirmationsArray[0].designation', null),
            name: get_1.default(obj, 'confirmation.confirmationsArray[0].clinicialName', null),
            number: get_1.default(obj, 'confirmation.confirmationsArray[0].gmcNumber', null),
        },
        sectionNineConfirmation2: {
            reviewDate: getDDMMMYYYY(get_1.default(obj, 'confirmation.confirmationsArray[1].reviewDate', null)),
            designation: get_1.default(obj, 'confirmation.confirmationsArray[1].designation', null),
            name: get_1.default(obj, 'confirmation.confirmationsArray[1].clinicialName', null),
            number: get_1.default(obj, 'confirmation.confirmationsArray[1].gmcNumber', null),
        }
    };
    doc.image(page1_1.default, 0, 0, { width: doc.page.width, height: doc.page.height });
    // SECTION 1
    if (get_1.default(form, 'preferredName', null)) {
        doc.fontSize(10)
            .text(form.preferredName, 316, 28, {
            width: 267,
            height: 23
        });
    }
    if (get_1.default(form, 'fullName', null)) {
        doc.text(form.fullName, 31, 85, {
            width: 267,
            height: 23
        });
    }
    if (get_1.default(form, 'dateOfBirth', null)) {
        doc.text(form.dateOfBirth, 316, 83, {
            width: 172,
            height: 23
        });
    }
    var defaultDate = moment_1.default().format(statuses_1.DATE_FORMAT);
    var dateCompleted = get_1.default(form, 'dateCompleted', null) ? form.dateCompleted : defaultDate;
    if (dateCompleted) {
        doc.text(dateCompleted, 505, 100, {
            width: 75,
            height: 23
        });
    }
    if (get_1.default(form, 'chiNumber', null)) {
        doc.fontSize(12)
            .text(form.chiNumber.toString(), 33, 129, {
            width: 285,
            height: 23,
            characterSpacing: 16.5
        });
    }
    doc.fontSize(10);
    if (get_1.default(form, 'address', null)) {
        var textRowsArray = getWrappedText(form.address, 35);
        var initialPositionOY = 115;
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 316, initialPositionOY + i * 10);
        }
    }
    // SECTION 2
    if (get_1.default(form, 'sectionTwoDiagnostics', null)) {
        var textRowsArray = getWrappedText(form.sectionTwoDiagnostics, 125);
        var initialPositionOY = 208;
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    if (get_1.default(form, 'sectionTwoDetails', null)) {
        var textRowsArray = getWrappedText(form.sectionTwoDetails, 125);
        var initialPositionOY = 300;
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    // SECTION 3
    if (get_1.default(form, 'sectionThreeX', null)) {
        doc.fontSize(14)
            .text('X', (278 * (form.sectionThreeX / 100)) + 169, 389, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionThreeDetails', null)) {
        var textRowsArray = getWrappedText(form.sectionThreeDetails, 125);
        var initialPositionOY = 447;
        doc.fontSize(10);
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    // SECTION 4
    if (get_1.default(form, 'sectionFourClinicalRecommendationsX', null)) {
        doc.fontSize(14)
            .text('X', (171 * (form.sectionFourClinicalRecommendationsX / 100)) + 187, 544, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionFourClinicalRecommendations', null)) {
        var textRowsArray = getWrappedText(form.sectionFourClinicalRecommendations, 125);
        var initialPositionOY = 618;
        doc.fontSize(10);
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    var sectionFourCprX = get_1.default(form, 'sectionFourCprX', null);
    if (sectionFourCprX) {
        var initialPositionOY = 760;
        doc.fontSize(14)
            .text('X', sectionFourCprX, initialPositionOY, {
            width: 10,
            height: 23
        });
        doc.ellipse(sectionFourCprX + 5, initialPositionOY + 5, 16, 10)
            .lineWidth(2)
            .strokeColor('#ff0000')
            .stroke();
    }
    doc.addPage();
    doc.image(page2_1.default, 0, 0, { width: doc.page.width, height: doc.page.height });
    // SECTION 5
    if (form.sectionFiveCapacity) {
        doc.ellipse(535, 52, 16, 10)
            .lineWidth(2)
            .strokeColor('#ff0000')
            .stroke();
    }
    else {
        doc.ellipse(562, 52, 16, 10)
            .lineWidth(2)
            .strokeColor('#ff0000')
            .stroke();
    }
    // Legal Proxy
    switch (get_1.default(form, 'sectionFiveLegalProxy', null)) {
        case 'Yes': // Yes
            doc.ellipse(470, 89, 16, 10)
                .lineWidth(2)
                .strokeColor('#ff0000')
                .stroke();
            break;
        case 'No': // No
            doc.ellipse(498, 89, 14, 10)
                .lineWidth(2)
                .strokeColor('#ff0000')
                .stroke();
            break;
        case 'Unknown': // Unknown
            doc.ellipse(544, 89, 35, 12)
                .lineWidth(2)
                .strokeColor('#ff0000')
                .stroke();
            break;
    }
    // SECTION 6
    if (get_1.default(form, 'sectionSixA', null)) {
        doc.fontSize(14)
            .text('X', 34, 163, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionSixB', null)) {
        doc.fontSize(14)
            .text('X', 34, 196, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionSixC', null)) {
        doc.fontSize(14)
            .text('X', 34, 242, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionSixC1', null)) {
        doc.fontSize(14)
            .text('X', 42, 271, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionSixC2', null)) {
        doc.fontSize(14)
            .text('X', 42, 288, {
            width: 10,
            height: 23
        });
    }
    if (get_1.default(form, 'sectionSixC3', null)) {
        doc.fontSize(14)
            .text('X', 42, 315, {
            width: 10,
            height: 23
        });
    }
    var sectionSixNotSelectingReason = get_1.default(form, 'sectionSixNotSelectingReason', null);
    if (sectionSixNotSelectingReason && sectionSixNotSelectingReason !== "") {
        var textRowsArray = getWrappedText(sectionSixNotSelectingReason, 125);
        var initialPositionOY = 360;
        doc.fontSize(10);
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    var sectionSixDocumentExplanation = get_1.default(form, 'sectionSixDocumentExplanation', null);
    if (sectionSixDocumentExplanation && sectionSixDocumentExplanation !== "") {
        var textRowsArray = getWrappedText(sectionSixDocumentExplanation, 125);
        var initialPositionOY = 419;
        doc.fontSize(10);
        for (var i = 0, n = textRowsArray.length; i < n; i++) {
            var row = textRowsArray[i];
            doc.text(row, 31, initialPositionOY + i * 15);
        }
    }
    // SECTION 7
    doc.fontSize(10);
    if (get_1.default(form, 'sectionSevenClinician1.designation', null)) {
        doc.text(form.sectionSevenClinician1.designation.toString(), 31, 497, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician1.name', null)) {
        doc.text(form.sectionSevenClinician1.name.toString(), 151, 497, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician1.number', null)) {
        doc.text(form.sectionSevenClinician1.number.toString(), 314, 497, {
            width: 85,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician1.name', null)) {
        doc.text(form.sectionSevenClinician1.name.toString(), 410, 497, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician1.dateTime', null)) {
        doc.text(form.sectionSevenClinician1.dateTime.toString(), 506, 497, {
            width: 78,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician2.designation', null)) {
        doc.text(form.sectionSevenClinician2.designation.toString(), 31, 517, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician2.name', null)) {
        doc.text(form.sectionSevenClinician2.name.toString(), 151, 517, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician2.number', null)) {
        doc.text(form.sectionSevenClinician2.number.toString(), 314, 517, {
            width: 85,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician2.name', null)) {
        doc.text(form.sectionSevenClinician2.name.toString(), 410, 517, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenClinician2.dateTime', null)) {
        doc.text(form.sectionSevenClinician2.dateTime.toString(), 506, 517, {
            width: 78,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenSeniorClinician.designation', null)) {
        doc.text(form.sectionSevenSeniorClinician.designation.toString(), 31, 537, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenSeniorClinician.name', null)) {
        doc.text(form.sectionSevenSeniorClinician.name.toString(), 151, 537, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenSeniorClinician.number', null)) {
        doc.text(form.sectionSevenSeniorClinician.number.toString(), 314, 537, {
            width: 85,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenSeniorClinician.name', null)) {
        doc.text(form.sectionSevenSeniorClinician.name.toString(), 410, 537, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionSevenSeniorClinician.dateTime', null)) {
        doc.text(form.sectionSevenSeniorClinician.dateTime.toString(), 506, 537, {
            width: 78,
            height: 18
        });
    }
    // SECTION 8
    doc.fontSize(10);
    if (get_1.default(form, 'sectionEightContact1.role', null)) {
        doc.text(form.sectionEightContact1.role.toString(), 31, 605, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact1.name', null)) {
        doc.text(form.sectionEightContact1.name.toString(), 151, 605, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact1.telephone', null)) {
        doc.text(form.sectionEightContact1.telephone.toString(), 314, 605, {
            width: 117,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact2.role', null)) {
        doc.text(form.sectionEightContact2.role.toString(), 31, 625, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact2.name', null)) {
        doc.text(form.sectionEightContact2.name.toString(), 151, 625, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact2.telephone', null)) {
        doc.text(form.sectionEightContact2.telephone.toString(), 314, 625, {
            width: 117,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact3.role', null)) {
        doc.text(form.sectionEightContact3.role.toString(), 31, 644, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact3.name', null)) {
        doc.text(form.sectionEightContact3.name.toString(), 151, 644, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact3.telephone', null)) {
        doc.text(form.sectionEightContact3.telephone.toString(), 314, 644, {
            width: 117,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact4.role', null)) {
        doc.text(form.sectionEightContact4.role.toString(), 31, 663, {
            width: 111,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact4.name', null)) {
        doc.text(form.sectionEightContact4.name.toString(), 151, 663, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionEightContact4.telephone', null)) {
        doc.text(form.sectionEightContact4.telephone.toString(), 314, 663, {
            width: 117,
            height: 18
        });
    }
    // SECTION 9
    doc.fontSize(10);
    if (get_1.default(form, 'sectionNineConfirmation1.reviewDate', null)) {
        doc.text(form.sectionNineConfirmation1.reviewDate.toString(), 31, 740, {
            width: 78,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation1.designation', null)) {
        doc.text(form.sectionNineConfirmation1.designation.toString(), 120, 740, {
            width: 108,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation1.name', null)) {
        doc.text(form.sectionNineConfirmation1.name.toString(), 234, 740, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation1.number', null)) {
        doc.text(form.sectionNineConfirmation1.number.toString(), 395, 740, {
            width: 108,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation1.name', null)) {
        doc.text(form.sectionNineConfirmation1.name.toString(), 510, 740, {
            width: 108,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation2.reviewDate', null)) {
        doc.text(form.sectionNineConfirmation2.reviewDate.toString(), 31, 760, {
            width: 78,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation2.designation', null)) {
        doc.text(form.sectionNineConfirmation2.designation.toString(), 120, 760, {
            width: 108,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation2.name', null)) {
        doc.text(form.sectionNineConfirmation2.name.toString(), 234, 760, {
            width: 154,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation2.number', null)) {
        doc.text(form.sectionNineConfirmation2.number.toString(), 395, 760, {
            width: 108,
            height: 18
        });
    }
    if (get_1.default(form, 'sectionNineConfirmation2.name', null)) {
        doc.text(form.sectionNineConfirmation2.name.toString(), 510, 760, {
            width: 108,
            height: 18
        });
    }
    doc.end();
    stream.on('finish', function () {
        var url = stream.toBlobURL('application/pdf');
        window.open(url, '_blank');
    });
    return true;
});
