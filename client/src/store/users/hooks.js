import { useRecoilState } from "recoil";
import { user } from "./atoms";


export const SetUserDetails = () => {
    const [items, setItems] = useRecoilState(user)
    return (err, data) => {
        console.log(data)
        setItems(data.user)
    }
}