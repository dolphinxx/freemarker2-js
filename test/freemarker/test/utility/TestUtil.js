const StringBuilder = require("../../../../dist/java/lang/StringBuilder").StringBuilder;
const {System} = require("../../../../dist/java/lang/System");
const {Configuration} = require('../../../../dist/freemarker/template/Configuration');
const TestUtil = (function () {
    function TestUtil() {

    }

    return TestUtil;
}());

TestUtil.arrayToString = function (array) {
    if (array == null) return "null";

    let sb = new StringBuilder();
    sb.append('[');
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            sb.append(", ");
        }
        if (Array.isArray(array[i])) {
            sb.append(TestUtil.arrayToString(array[i]));
        } else {
            sb.append(array[i]);
        }
    }
    sb.append(']');
    return sb.toString();
};

TestUtil.listToString = function (list) {
    return TestUtil.collectionToString("", list);
};


TestUtil.setToString = function (list) {
    return TestUtil.collectionToString("Set", list);
};

TestUtil.collectionToString = function (prefix, list) {
    if (list == null) return "null";

    let sb = new StringBuilder();
    sb.append(prefix);
    sb.append('[');
    let first = true;
    for (let item of list) {
        if (!first) {
            sb.append(", ");
        } else {
            first = false;
        }
        sb.append(Array.isArray(item) ? TestUtil.arrayToString(item) : item);
    }
    sb.append(']');
    return sb.toString();
};

TestUtil.removeTxtCopyrightComment = function (s) {
    if (!s.startsWith("/*")) {
        return s;
    }

    let commentEnd = s.indexOf("*/");
    if (commentEnd === -1) {
        return s;
    }
    commentEnd += 2;
    if (commentEnd < s.length) {
        let c = s.charAt(commentEnd);
        if (c === '\n' || c === '\r') {
            commentEnd++;
            if (c === '\r' && commentEnd < s.length) {
                if (s.charAt(commentEnd) === '\n') {
                    commentEnd++;
                }
            }
        }
    }

    let comment = s.substring(0, commentEnd);
    let copyrightIdx = comment.indexOf("copyright");
    if (copyrightIdx === -1) {
        copyrightIdx = comment.indexOf("Copyright");
    }
    if (copyrightIdx === -1) {
        return s;
    }

    return s.substring(commentEnd);
};

TestUtil.removeFTLCopyrightComment = function (ftl) {
    if (ftl.contains("<#ftl ns_prefixes = {\"D\" : \"http://example.com/eBook\"}>")) {
        System.out.println();
    }

    let copyrightIdx = ftl.indexOf("copyright");
    if (copyrightIdx === -1) {
        copyrightIdx = ftl.indexOf("Copyright");
    }
    if (copyrightIdx === -1) {
        return ftl;
    }

    let commentFirstIdx;
    let squareBracketTagSyntax;
    {
        let ftlBeforeCopyright = ftl.substring(0, copyrightIdx);
        let abCommentStart = ftlBeforeCopyright.lastIndexOf("<#--");
        let sbCommentStart = ftlBeforeCopyright.lastIndexOf("[#--");
        squareBracketTagSyntax = sbCommentStart > abCommentStart;
        commentFirstIdx = squareBracketTagSyntax ? sbCommentStart : abCommentStart;
        if (commentFirstIdx === -1) {
            throw new Error("Can't find copyright comment start");
        }
    }

    let commentLastIdx;
    {
        let commentEndStart = ftl.indexOf(squareBracketTagSyntax ? "--]" : "-->", copyrightIdx);
        if (commentEndStart === -1) {
            throw new Error("Can't find copyright comment end");
        }
        commentLastIdx = commentEndStart + 2;
    }

    let afterCommentNLChars;
    if (commentLastIdx + 1 < ftl.length()) {
        let afterCommentChar = ftl.charAt(commentLastIdx + 1);
        if (afterCommentChar === '\n' || afterCommentChar === '\r') {
            if (afterCommentChar === '\r' && commentLastIdx + 2 < ftl.length() && ftl.charAt(commentLastIdx + 2) === '\n') {
                afterCommentNLChars = 2;
            } else {
                afterCommentNLChars = 1;
            }
        } else {
            afterCommentNLChars = 0;
        }
    } else {
        afterCommentNLChars = 0;
    }

    return ftl.substring(0, commentFirstIdx) + ftl.substring(commentLastIdx + afterCommentNLChars + 1);
};

/**
 * Returns the closes FreeMarker version number that doesn't exit yet (so it's illegal).
 */
TestUtil.getClosestFutureVersion = function () {
    let v = Configuration.getVersion();
    return new Version(v.getMajor(), v.getMinor(), v.getMicro() + 1);
};


exports.TestUtil = TestUtil;