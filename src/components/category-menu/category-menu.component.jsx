import './categories-menu-styles.scss'
import CategoryItem from "../category-item/category-item.component";

const CategorieMenu = ({ categories }) => {
    return (
        <div className="categories-menu-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default CategorieMenu