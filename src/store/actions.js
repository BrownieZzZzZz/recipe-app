import axios from 'axios';
export function searchMeals({ commit }, keyword){
    axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
}

export function searchMealsByLetter({ commit }, letter){
    if(letter){
        axios.get(`https://themealdb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
    }
}

export function searchMealsByIngredient({ commit }, ingredient){
    axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(({data}) => {
            commit('setMealsByIngredient', data.meals)
        })
}

