import Card from "./Card";

type Department = {
  id: string;
  name: string;
  description: string;
  managingDepartmentId: string;
  createdAt: string;
};

type DepartmentState = {
  departments: Department[];
};

const CardContainer = ({ data }: any) => {
  return (
    <div className="w-full h-auto grid md:grid-cols-4 gap-5">
      {data?.map((item: Department) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default CardContainer;
