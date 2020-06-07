import { useRecoilState } from "recoil";
import {localeDate} from './atoms'

export const useSetDate = () =>{
    const [date, setDate] = useRecoilState(localeDate) 
    return (data) => {
        setDate(data)
    }
}