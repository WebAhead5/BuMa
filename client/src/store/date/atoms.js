import { atom } from "recoil";

const dateToday = new Date()

export const localeDate = atom({
    key: 'localeDate',
    default: dateToday,
})