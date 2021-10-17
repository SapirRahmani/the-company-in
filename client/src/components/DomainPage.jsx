import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const DomainPage = () => {
  const { id } = useParams();
  const currentDomain = useSelector((state) => state.domains).get(id);
  const fieldToDisplay = [
    "logo",
    "name",
    "domain",
    "description",
    "industry",
    "moneyraised",
    "marketcap",
    "annualrevenue",
    "location",
    "numberemployees",
  ];

  return (
    <>
      {fieldToDisplay.map((field) => (
        <div>
          {currentDomain[field.toString()] &&
            (field === "logo" ? (
              <img src={currentDomain[field]} />
            ) : (
              <h2 key={field}>
                {field} : {currentDomain[field]}
              </h2>
            ))}
        </div>
      ))}
    </>
  );
};

export default DomainPage;
