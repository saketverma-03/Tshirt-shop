import React from "react";
import "./index.scss";
import "./index.css";
import { data } from "autoprefixer";

const Policiestab = () => {
  return (
    <div className="project-create">
      <div className="create-button">
        <button>Policy Page</button>
      </div>
      <div className="project-list">
        <div className="heading-all">
          <p>CaseId</p>
          <p>Name</p>
          <p>EmailId</p>
          <p>ContactNumber</p>
          <p>Status</p>
        </div>

        {data.map((item) => {
          console.log(item);
          return (
            <div className="heading-all">
              <p>{item.case_id}</p>
              <p>{item.customer_name}</p>
              <p>{item.document_submitted[0].email}</p>
              <p>{item.document_submitted[0].mobile_no}</p>
              <p>{item.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Policiestab;
