
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, currentPage, handlePageClick }) {
    if (pageCount <= 1) {
        return null;
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={currentPage}
                containerClassName={"pagination"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                activeLinkClassName={"active"}
                pageClassName={"page-item"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
            />
        </div>
    );
}

export default Pagination;
