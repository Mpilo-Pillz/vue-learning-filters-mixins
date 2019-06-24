export const fruitMixin = {
    data() {
        return {    
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
        // array.filter(function(currentValue, index, arr), thisValue)
        //TODO make it case insensitive
    },
    created() {
        console.log('Created');
    },
};