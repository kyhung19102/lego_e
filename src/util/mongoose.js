module.exports = {
    multipleObject: function (arraysE) {
        return arraysE.map((element) => element.toObject());
    },
    singleObject: function (singleE) {
        return singleE ? singleE.toObject() : singleE;
    },
    slugify: (string) => string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")

}