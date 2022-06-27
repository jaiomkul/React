import './category.css'

function Category({image, label}){
    return <div className="category">
        <img src={image} alt="" />
        <p>{label}</p>
    </div>

}

export default Category;