import { useState } from 'react';

import Filters from '../Filters'
import DishList from '../DishList'

import { dishList } from '../../data'

const tabsList = [
  {tabId: 'STARTER', displayText: 'Starter'},
  {tabId: 'MAIN COURSE', displayText: 'Main Course'},
  {tabId: 'DESSERT', displayText: 'Dessert'},
  {tabId: 'SIDES', displayText: 'Sides'},
]


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(tabsList[0].tabId)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDishes,setSelectedDishes] = useState([])
    const [vegOnly, setVegOnly] = useState(false);
    const [nonVegOnly, setNonVegOnly] = useState(false);

    const filteredDishList = dishList
    .filter(dish => dish.mealType === selectedCategory)
    .filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(dish => {
        if (vegOnly && dish.type === "VEG") return true;
        if (nonVegOnly && dish.type === "NON-VEG") return true;
        if (!vegOnly && !nonVegOnly) return true; 
        return false;
    });

    const groupedDataList = filteredDishList.reduce((acc,dish)=>{
        const existingCategory = acc.find(eachacc=> eachacc.category.name === dish.category.name)
        if(existingCategory) {
        existingCategory.dishes.push(dish)
        } else{
        acc.push({category:dish.category, dishes:[dish]})
        }
        return acc
    }, [])


    return (
        <div className='home-container'>
            <Filters 
                tabsList={tabsList} 
                setSelectedCategory={setSelectedCategory} 
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                activeCategory={selectedCategory}
                selectedDishes={selectedDishes}
                vegOnly={vegOnly}
                setVegOnly={setVegOnly}
                nonVegOnly={nonVegOnly}
                setNonVegOnly={setNonVegOnly}
            />
            <DishList 
                groupedDataList={groupedDataList} 
                selectedDishes={selectedDishes} 
                setSelectedDishes={setSelectedDishes}
            />
        </div>
    )
}


export default Home