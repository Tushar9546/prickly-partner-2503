export const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  handlePageChange,
}) => {
  return (
    <div style={{ margin: "2rem" }}>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(-1)}
        style={{
          border: "none",
          margin: "0px 5px",
          borderRadius: "3px",
          padding: "4px 10px",
          fontWeight: "bold",
          backgroundColor: "darkgray",
        }}
      >
        PREV
      </button>
      <button style={{ border: "none", margin: "0px 5px", fontWeight: "bold" }}>
        {currentPage}
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(1)}
        style={{
          border: "none",
          margin: "0px 5px",
          borderRadius: "3px",
          padding: "4px 10px",
          fontWeight: "bold",
          backgroundColor: "darkgray",
        }}
      >
        NEXT
      </button>
    </div>
  );
};
