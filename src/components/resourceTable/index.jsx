import {
  faDownload,
  faFilePdf,
  faList,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from '../loadingSpinner'
import "./index.scss";

const ResourceTable = (props) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const examData = [];
      const snapshot = await getDocs(collection(db, props.name));
      snapshot.forEach((element) => {
        const data = element.data();
        examData.push({
          id: element.id,
          number: data.number,
          td: data.td,
          pdf: data.pdf,
          download: data.download,
        });
      });
      setResources(examData);
    } catch (err) {
      console.error("Error fetching data", err)
      setError("Failed to load resources. Please try later.")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.name]);

  return (
    <>
      <h2 className="header-title">{props.header}</h2>
      {loading && <LoadingSpinner />}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <FontAwesomeIcon icon={faList} size="2x" />
              </th>
              <th>{props.title}</th>
              <th className="remove">Question Paper</th>
              <th>Answers</th>
            </tr>
          </thead>
          <tbody>
            {resources.length > 0 ? (
              resources.map((item) => (
                <tr key={item.id}>
                  <td>{item.number}</td>
                  <td>
                    <Link to={item.pdf} target="_blank">
                      {item.td}{" "}
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="mobile-show"
                      />
                    </Link>
                  </td>
                  <td className="remove">
                    <Link
                      to={item.pdf}
                      download={item.download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faDownload} color="blue" />{" "}
                      Download
                    </Link>
                  </td>
                  <td className="answers">
                    <Link to="" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLock} color="red" /> Answers
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No resources available.</td>
              </tr>
            )}
          </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ResourceTable;
