// STYLES
import "./Pagination.scss";
import RCPagination from "rc-pagination";
import "rc-pagination/assets/index.less";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function Pagination({ total }) {
  return (
    <RCPagination
      className="pagination"
      total={total}
      prevIcon={<HiOutlineArrowLeft />}
      nextIcon={<HiOutlineArrowRight />}
    />
  );
}

export default Pagination;
