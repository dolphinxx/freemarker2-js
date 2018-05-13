"use strict";
exports.__esModule = true;

const Product = (function(){
    function Product() {

    }
    Product.prototype.setName = function(name) {
        this.name = name;
    };
    Product.prototype.getName = function() {
        return this.name;
    };
    Product.prototype.setUrl = function(url) {
        this.url = url;
    };
    Product.prototype.getUrl = function() {
        return this.url;
    };
    return Product;
}());

exports.Product = Product;
Product['__class'] = 'freemarker.manual.Product';