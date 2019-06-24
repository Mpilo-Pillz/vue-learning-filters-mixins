<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | uppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin.js';
    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!',
                // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                // filterText: ''
            }
        },
        filters: {
            uppercase(value) {
                return value.toUpperCase();
            }
        },
        // computed: {
        //     filteredFruits() {
        //         return this.fruits.filter((element) => {
        //             return element.toLowerCase().match(this.filterText);
        //         });
        //     }
        //     // array.filter(function(currentValue, index, arr), thisValue)
        //     //TODO make it case insensitive
        // },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
