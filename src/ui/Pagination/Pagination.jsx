// REACT * LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./Pagination.scss";
import RCPagination from "rc-pagination";
import "rc-pagination/assets/index.less";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function Pagination({ total, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = current => {
    searchParams.set("page", current);
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pagination">
      <RCPagination
      total={total}
      pageSize={pageSize}
      prevIcon={<HiOutlineArrowLeft />}
      nextIcon={<HiOutlineArrowRight />}
      onChange={handleChange}
    />
    </div>
  );
}

export default Pagination;
