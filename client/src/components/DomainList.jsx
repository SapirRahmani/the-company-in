import { useEffect } from "react";
import { useSelector } from "react-redux";
import DomainItem from "./DomainItem";

const DomainList = ({}) => {
  const domains = useSelector((state) => state.domains);
  return (
    <>
      {domains &&
        [...domains.values()].map((node) => (
          <DomainItem key={node.id} {...node} />
        ))}
    </>
  );
};
export default DomainList;
