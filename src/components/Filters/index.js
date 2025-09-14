import { CiSearch } from "react-icons/ci"
import { IoIosArrowBack } from "react-icons/io"
import './index.css'


const Filters = props =>{
    const {
        tabsList, 
        searchTerm, 
        setSearchTerm,
        setSelectedCategory, 
        activeCategory, 
        selectedDishes,
        vegOnly,
        setVegOnly,
        nonVegOnly,
        setNonVegOnly
    } = props

    const activeTab = tabsList.find(tab => tab.tabId === activeCategory)
    const count = selectedDishes.filter(dish => dish.mealType === activeCategory).length
    
    const onSearchChange = event =>{
        setSearchTerm(event.target.value)
    }

    return (
        <div className='filter-main-container'>
            <div className='filter-search-bar'>
                <button type="button" className="search-back-button" onClick={()=>{setSearchTerm("")}}><IoIosArrowBack className="search-back-icon" /></button>
                <input 
                    type='text'
                    value={searchTerm}
                    placeholder="Search dish for your party......" 
                    onChange={onSearchChange}
                    className="input-element"
                />
                <CiSearch className="search-icon"/>
            </div>
            <div className='categories-tab-container'>
                <ul className='unordered-list-categories'>
                    {tabsList.map(eachTab=>(
                    <li key={eachTab.tabId} className='each-category-item'>
                        <button type='button'  
                        onClick={()=> setSelectedCategory(eachTab.tabId)}
                        className= {`tab-btn ${activeCategory===eachTab.tabId? 'active-tab-btn': ''}`}
                        >{eachTab.displayText} {selectedDishes.filter(dish=>dish.mealType===eachTab.tabId).length}
                        </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className="count-toggle-container">
                <p>
                    {activeTab.displayText} Selected {count}
                </p>
                <div className="toggle-main-container">
                    <div className="veg-toggle-container">
                        <label htmlFor="veg-toggle" className="toggle-label">
                            <input 
                                type="checkbox" 
                                id="veg-toggle"
                                checked={vegOnly}
                                onChange={()=> setVegOnly(!vegOnly)}
                            />
                            <span className="slider">
                                <div className="slider-icon veg">
                                    <span className="circle veg-circle"></span>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="non-veg-toggle-container">
                        <label htmlFor="non-veg-toggle" className="toggle-label">
                            <input 
                                type="checkbox" 
                                id="non-veg-toggle"
                                checked={nonVegOnly}
                                onChange={()=> setNonVegOnly(!nonVegOnly)}
                            />
                            <span className="slider">
                                <div className="slider-icon non-veg">
                                    <span className="circle non-veg-circle"></span>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters