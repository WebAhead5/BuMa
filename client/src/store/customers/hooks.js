import { useRecoilState } from "recoil";
import { customers } from "./atoms";
import { filterDisplay } from './atoms';


export const useSetCustomers = () => {
  const [items, setItems] = useRecoilState(customers);
  return (err, data) => {
      setItems(data.customers);
  };
};

export const useSetfilterDisplay = () => {
    const [items, setItems] = useRecoilState(filterDisplay);
    return (data) => {
        setItems(data);
    };
  };