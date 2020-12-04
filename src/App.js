import { useState } from "react";
import useDataApi from "./components/actions/index";
import Pagination from "reactjs-hooks-pagination";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const result = 10;

  =

  return (
    <div>
      <h2>User API App</h2>

      {error && <h4>Something went wrong</h4>}

      {loading ? (
        <h4>Users data loading...</h4>
      ) : (
        <div>
          <Pagination
            totalRecords={totalRecords}
            pageLimit={pageLimit}
            pageRangeDisplayed={1}
            onChangePage={setCurrentPage}
          />
          <br />
          <br />
          {data.results.map((user) => (
            <div key={user.login.uuid}>
              <img src={user.picture.medium} alt="user" />
              <p>
                <b>Gender</b>: {user.gender}
              </p>
              <p>
                <b>Name:</b> {user.name.last} {user.name.first}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Phone: </b> {user.phone}
              </p>
              <br />
              <br />
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
