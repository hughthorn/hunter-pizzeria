var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    const items = [
        {
            id: 0,
            image: 'images/0.jpg',
            name: 'Cheese Pizza',
            price: '$4.5',
            calories: 200
        },
        {
            id: 1,
            image: 'images/1.jpg',
            name: 'Pepperoni Pizza',
            price: '$4.5',
            calories: 300
        },
        {
            id: 2,
            image: 'images/2.jpg',
            name: 'Double-Mushroom Pizza',
            price: '$4.5',
            calories: 270
        },
        {
            id: 3,
            image: 'images/3.jpg',
            name: 'Grilled Veggie Pizza',
            price: '$5',
            calories: 220
        },
        {
            id: 4,
            image: 'images/4.jpg',
            name: 'Hawaiian Pizza',
            price: '$4',
            calories: 210
        }
    ]
    res.json({ items });
});

module.exports = router;
