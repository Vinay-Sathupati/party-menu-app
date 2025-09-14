import { FaChevronLeft } from "react-icons/fa";
import {useParams, useNavigate} from "react-router-dom"

import {dishList} from '../../data'

import './index.css'

const Ingredients = () =>{

    const {id} = useParams()
    const navigate = useNavigate()

    const dish = dishList.find(item=> String(item.id) === id)

    return (
        <div className='ingredient-main-container'>
            <div className='ingredient-header'>
                <button 
                    className="back-button" 
                    type="button"
                    onClick={()=> navigate(-1)}
                ><FaChevronLeft className="back-button-icon" /></button>
                <h1 className="ingredient-heading">Ingredient list</h1>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-and-img">
                <div className="details">
                    <div className="title-and-description">
                        <h1 className="ingredient-title">{dish.name}</h1>
                        <p className="ingredient-description">
                            {dish.description}
                        </p>
                    </div>
                    <div>
                        <h1 className="ingredient-title">Ingredients</h1>
                        <p>For 2 people</p>
                    </div>
                </div>
                <img className="ingredient-img" src="https://res.cloudinary.com/dxcwdueld/image/upload/v1757861075/Ing_1_pvleoe.jpg" alt="ingredient-img" />
            </div>
            <hr className="horizontal-line"/>
            <ul className="unordered-list-ingredients-items">
                {dish.ingredients.map((ingredient,index)=> (
                    <li key={index} className="ingredients-list-items">
                        <p>{ingredient.name}</p>
                        <p>{ingredient.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredients