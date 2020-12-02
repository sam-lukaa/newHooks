import { useState } from "react";
import useDataApi from "./components/actions/index";
import Pagination from "reactjs-hooks-pagination";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const result = 10;

  const [{ data, loading, error, pageLimit, totalRecords }] = useDataApi(
    `https://randomuser.me/api/?page=${currentPage}&results=${result}`,
    {
      results: [],
    }
  );

  return (
    <div>
      <h2>User API App</h2>

      {error && <h4>Something went wrong</h4>}

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {data.results.map((user) => (
            <div>
              <p>Gender: {user.gender}</p>
              <p>
                Name: {user.name.last} {user.name.first}
              </p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <img src={user.picture.medium} alt="user" />
            </div>
          ))}
        </div>
      )}

      <Pagination
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        pageRangeDisplayed={1}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

// ! Never forget await.
