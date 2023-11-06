/* eslint-disable react/prop-types */
import CategoryItems from "../categories/CategoryItems"
import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {
                categories.map((category) =>{
                    return <CategoryItems key={category.id}  category={category} />
                })
            }
        </div>
    );
}

export default Directory;
