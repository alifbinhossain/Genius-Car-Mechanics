import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-center text-primary mt-3">Service id {id}</h1>
    </div>
  );
};

export default ServiceDetails;
