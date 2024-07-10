import store from '../store'
export function setSearchedMeals(state, meals) {
    store.replaceState({
        searchedMeals: meals,
        mealsByLetter: state.mealsByLetter,
        mealsByIngredient: state.mealsByIngredient
    });
}

export function setMealsByLetter(state, meals) {
    store.replaceState({
        searchedMeals: state.searchedMeals,
        mealsByLetter: meals,
        mealsByIngredient: state.mealsByIngredient
    });
}

export function setMealsByIngredient(state, meals) {
    store.replaceState({
        searchedMeals: state.searchedMeals,
        mealsByLetter: state.mealsByLetter,
        mealsByIngredient: meals
    });
}