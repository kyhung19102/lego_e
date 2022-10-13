module.exports ={
    multipleObject: function(arraysE) {
        return   arraysE.map((element) => element.toObject());
    },
    singleObject : function(singleE)
    {
        return singleE ? singleE.toObject(): singleE;
    }
}