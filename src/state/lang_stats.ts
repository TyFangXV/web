import { atom } from "recoil";
import { IlanguageCount } from "../utils/interfere";

export const userLangStats = atom<IlanguageCount>({
    key: "userLangStats",
    default: {
        language: "",
        count: 0,
        index: 0,
    }
})


export const LanguageCount = atom<IlanguageCount[]>({
    key: "LanguageCount",
    default: []
})