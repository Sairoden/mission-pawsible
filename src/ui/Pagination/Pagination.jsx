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
    const twentyPercentOfPage = document.body.scrollHeight * 0.2;
    window.scrollTo({ top: twentyPercentOfPage, behavior: "smooth" });
  };

  return (
    <RCPagination
      className="pagination"
      total={total}
      pageSize={pageSize}
      prevIcon={<HiOutlineArrowLeft />}
      nextIcon={<HiOutlineArrowRight />}
      onChange={handleChange}
    />
  );
}

export default Pagination;
