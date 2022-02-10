import { atom } from "recoil";
import { IlanguageCount } from "../utils/interfere";

const userLangStats = atom<IlanguageCount>({
    key: "userLangStats",
    default: {
        language: "",
        count: 0,
        index: 0,
    }
})
