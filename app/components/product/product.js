angular.module('ecommerce').component('product',{
    templateUrl:'app/components/product/product.html',
    controller: function(cartSrvc){
        this.addItem = function(){
            cartSrvc.addItem(this.product);
        }
    },
    controllerAs:'pd',
    bindings:{
        product:'<', 
        //  < one way binding
        //  = 2 way bind
        //  @ string bind
        //  & action bind
        buttonLabel:'@',
        buttonAction:'&'
    }
})