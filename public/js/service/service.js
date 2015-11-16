myCart.service("loadimg", function () {
    "use strict";
    this.items = [
        {'name': 'Mens Jacket',
                'price': 2500,
                'availability': 5,
                'image': "assets/images/jacket.jpg"},
        {'name': 'Ladies Jacket',
                'price': 1500,
                'availability': 5,
                'image': "assets/images/jacket1.jpg"},
         {'name': 'Mens Shoe',
                'price': 2000,
                'availability': 10,
                'image': "assets/images/footware1.jpg"},
        {'name': 'Mens Shoe',
                'price': 2000,
                'availability': 10,
                'image': "assets/images/footware.jpg"},
         {'name': 'Camera',
                'price': 20000,
                'availability': 10,
                'image': "assets/images/camera.jpg"},
         {'name': 'bag',
                'price': 2500,
                'availability': 10,
                'image': "assets/images/bag.jpg"}
    ]; 
    this.itemClicked = "";

});
    
