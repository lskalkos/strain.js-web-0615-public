'use strict';

var strain = {
  // add your solution here!

    keep: function(array, func) {

        var i=0;
        var new_array = [];

        while(i < array.length) {
            if(func(array[i])){
                new_array.push(array[i]);
                i++;
            } else {
                i++;
            }
        }

        return new_array;
    },

    discard: function(array, func) {

        var i=0;
        var new_array = [];

        while(i < array.length) {
            if(func(array[i])){
                i++;
            } else {
                new_array.push(array[i]);
                i++;
            }
        }

        return new_array;
    }
};

//strain.prototype.keep(array, func) {
//
//    array.map(function(element){
//        if(func(element)){
//            return element;
//        };
//    })
//}