'use strict';

class Product {
    static selectByCondition(productsArray, conditionString = '') {
        return productsArray.filter(item => item.isMeets(conditionString));
    }

    constructor ({ name, price, quantity, description }) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    isMeets (conditionString) {
        let conditions = conditionString.split('&');

        for (let condition of conditions) {
            let isMeets = true;

            if (condition.startsWith('name')) {
                isMeets = this.#isNameMeets(condition);
            }

            if (condition.startsWith('price')) {
                isMeets = this.#isPriceMeets(condition);
            }

            if (condition.startsWith('quantity')) {
                isMeets = this.#isQuantityMeets(condition);
            }

            if (condition.startsWith('description')) {
                isMeets = this.#isDescriptionMeets(condition);
            }

            if (!isMeets) return false;
        }

        return true;
    }

    #isNameMeets (nameConditionString) {
        let [, method, substring] = nameConditionString.split('-');
        const name = this.name.toLowerCase();
        substring = substring.toLowerCase();

        if (method === 'contains') {
            return name.indexOf(substring) !== -1;
        }

        if (method === 'starts') {
            return name.startsWith(substring);
        }

        if (method === 'ends') {
            return name.endsWith(substring);
        }

    }

    #isDescriptionMeets (descriptionConditionString) {
        let [, method, substring] = descriptionConditionString.split('-');
        const description = this.description.toLowerCase();
        substring = substring.toLowerCase();

        if (method === 'contains') {
            return description.indexOf(substring) !== -1;
        }

        if (method === 'starts') {
            return description.startsWith(substring);
        }

        if (method === 'ends') {
            return description.endsWith(substring);
        }
    }

    #isPriceMeets (priceConditionString) {
        let [, operation] = priceConditionString.split('-');
        if (operation.startsWith('=')) return eval(`${this.price} =${operation}`);
        return eval(`${this.price} ${operation}`);
    }

    #isQuantityMeets (quantityConditionString) {
        let [, operation] = quantityConditionString.split('-');
        if (operation.startsWith('=')) return eval(`${this.quantity} =${operation}`);
        return eval(`${this.quantity} ${operation}`);
    }


}

let productsArray = [
    {
        name: 'макароны',
        description: 'Продукт питания',
        price: 216,
        quantity: 77
    },
    {
        name: 'мука',
        description: 'Продукт питания',
        price: 19,
        quantity: 24
    },
    {
        name: 'сахар',
        description: 'Продукт питания',
        price: 46,
        quantity: 20
    },
    {
        name: 'сливочное масло',
        description: 'Продукт питания',
        price: 130,
        quantity: 88
    },
    {
        name: 'растительное масло',
        description: 'Продукт питания',
        price: 79,
        quantity: 19
    },
    {
        name: 'уксус',
        description: 'Продукт питания',
        price: 362,
        quantity: 92
    },
    {
        name: 'бобы',
        description: 'Продукт питания',
        price: 197,
        quantity: 43
    },
    {
        name: 'овсянка',
        description: 'Продукт питания',
        price: 71,
        quantity: 76
    },
    {
        name: 'рис',
        description: 'Продукт питания',
        price: 489,
        quantity: 96
    },
    {
        name: 'любые консервы',
        description: 'Продукт питания',
        price: 42,
        quantity: 50
    },
    {
        name: 'майонез',
        description: 'Продукт питания',
        price: 137,
        quantity: 72
    },
    {
        name: 'томатная паста',
        description: 'Продукт питания',
        price: 320,
        quantity: 68
    },
    {
        name: 'овощные смеси замороженные',
        description: 'Продукт питания',
        price: 131,
        quantity: 47
    },
    {
        name: 'свежее мясо для заморозки',
        description: 'Продукт питания',
        price: 201,
        quantity: 38
    },
    {
        name: 'капуста',
        description: 'Продукт питания',
        price: 116,
        quantity: 9
    },
    {
        name: 'яблоки',
        description: 'Продукт питания',
        price: 120,
        quantity: 95
    },
    {
        name: 'лук',
        description: 'Продукт питания',
        price: 75,
        quantity: 44
    },
    {
        name: 'картофель',
        description: 'Продукт питания',
        price: 125,
        quantity: 66
    },
    {
        name: 'морковь',
        description: 'Продукт питания',
        price: 90,
        quantity: 83
    },
    {
        name: 'чай',
        description: 'Продукт питания',
        price: 65,
        quantity: 41
    },
    {
        name: 'кофе',
        description: 'Продукт питания',
        price: 341,
        quantity: 85
    },
    {
        name: 'вода',
        description: 'Продукт питания',
        price: 162,
        quantity: 68
    },
    {
        name: 'пакеты для мусора',
        description: 'предметы быта',
        price: 312,
        quantity: 39
    },
    {
        name: 'туалетная бумага',
        description: 'предметы быта',
        price: 499,
        quantity: 61
    },
    {
        name: 'мыло',
        description: 'предметы быта',
        price: 167,
        quantity: 60
    },
    {
        name: 'моющие средства',
        description: 'предметы быта',
        price: 237,
        quantity: 2
    },
    {
        name: 'стиральный порошок',
        description: 'предметы быта',
        price: 459,
        quantity: 15
    },
    {
        name: 'зубная паста',
        description: 'предметы быта',
        price: 395,
        quantity: 84
    }
]

productsArray = productsArray.map(item => new Product(item));


let condition = 'price->100&price-<200&description-ends-быта';

console.log(Product.selectByCondition(productsArray, condition));