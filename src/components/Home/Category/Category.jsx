import { useNavigate } from "react-router-dom";

import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
const Category = ({ categories, innerCat,  catHeadingText}) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      {!innerCat && <div className="heading">{catHeadingText}</div>}
      
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className="thumbnail">
              <img
                src={
                  process.env.REACT_APP_LOOPLOVE_URL +
                  item?.attributes?.img?.data?.attributes?.url
                }
                alt=""
              />
            </div>

            <span className="cat-title">{item?.attributes?.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
