import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import { FaChevronUp, FaChevronDown , FaChevronRight  } from "react-icons/fa";

import './index.css'



const VegIcon = () =>(
    <div className="slider-icon veg">
        <span className="circle veg-circle"></span>
    </div>
)

const NonvegIcon = () =>(
    <div className="slider-icon non-veg">
        <span className="circle non-veg-circle"></span>
    </div>
)

const DishList = props =>{
    const {groupedDataList, selectedDishes, setSelectedDishes} = props
    const [openCategory, setOpenCategory] = useState([])

    const navigate = useNavigate()

    
    const addOrRemoveItem = (dish)=>{             
            setSelectedDishes(prevSelected=>{
                const isSelected = prevSelected.some(item => item.id === dish.id)
                if(isSelected){
                    return prevSelected.filter(item=>item.id !==dish.id)
                } else{
                    return [...prevSelected,dish]
                }
            })
    }

    useEffect(()=>{
        const initialState = groupedDataList.map(cat=>({id:cat.category.id, isOpen:true}))
        setOpenCategory(initialState)
    }, [groupedDataList])
    

    const toggleCategory = id =>{
        setOpenCategory(prev=> prev.map(cat=> 
            cat.id === id ? {...cat, isOpen: !cat.isOpen} : cat
        ))
    }

    return (
        <div className="dish-comp-main-container">
            <ul className="unordered-dish-cards-main-container">
                {groupedDataList.map(({category,dishes})=>{
                    const catState = openCategory.find(cat=>cat.id===category.id)
                    const isOpen = catState? catState.isOpen : true
                    
                    return (
                        <li key={category.id} className="dish-card-category-list">
                            <div className="dish-card-category-names">
                                <p>{category.name}</p>
                                <button
                                    type="button"
                                    className="up-down-button"
                                    onClick={ ()=> toggleCategory(category.id)}
                                >
                                    {isOpen? <FaChevronUp/> : <FaChevronDown/>}
                                </button>
                            </div>

                            {isOpen && (
                                <ul className="unordered-dish-cards-container">
                                    {dishes.map(dish =>{
                                        const isSelected = selectedDishes.some(item => item.id === dish.id);
                                        return (                                  
                                            <>
                                                <li key={dish.id} className="dish-cards-container">
                                                    <div>
                                                        <div className="dishname-and-type">
                                                            <p>{dish.name}</p>
                                                            {dish.type === "VEG" ? <VegIcon /> : <NonvegIcon />}
                                                        </div>
                                                        <p>{dish.description}</p>
                                                        <button
                                                            type="button"
                                                            className="ingredient-button"
                                                            onClick={()=> navigate(`/ingredients/${dish.id}`)}
                                                        >
                                                            <img className="ingredient-icon-img" alt='ingredient-img' src={dish.image}/>
                                                            Ingredient
                                                        </button>
                                                    </div>
                                                    <div className="img-with-add-remove-button">
                                                        <img className="dish-img" src={dish.image} alt={dish.name} />
                                                        <button type="button" className={`add-remove-button ${isSelected? "remove-button" : "add-button"}`} onClick={()=> addOrRemoveItem(dish)}>
                                                            {isSelected? "Remove" : "Add +"}
                                                        </button>
                                                    </div>
                                                </li>
                                                <hr className="horizontal-line" />
                                            </>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>   
                    )
                })}
            </ul>
            <div className="total-seleceted-section">
                <div className="selected-text-and-right-button">
                    <p className="total-selected-text">Total Dish Selected {selectedDishes.length}</p>
                    <FaChevronRight className="right-icon"/>
                </div>
                <hr className="horizontal-line"/>
                <div className="continue-btn-container">
                    <button type="button" className="continue-button">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default DishList