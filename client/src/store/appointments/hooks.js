import { useRecoilState } from "recoil";
import { appointments } from "./atoms";


export const useSetAppointments = () => {
    const [items, setItems] = useRecoilState(appointments);
    return (err, data) => {
        setItems(data.appointments);
    };
};

export const useRemoveAppointment = () => {
    const [items, setItems] = useRecoilState(appointments)
    return (id) => {
        setItems(items.filter(item => item.id !== id))
    }
}