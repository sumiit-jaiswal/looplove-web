import useFetch from "../../hooks/useFetch";
import Category from "../Home/Category/Category";
import "./Catpage.scss";

const Catpage = () => {
  const { data } = useFetch(`/api/categories?populate=*`);

  return (
    <div>
      <div className="catpage">
        <div className="heading">Shop By Category</div>
        <Category innerCat={true} categories={data} />
      </div>
    </div>
  );
};
export default Catpage;
