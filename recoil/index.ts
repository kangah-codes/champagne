import { atom } from "recoil";

export const modalState = atom({
	key: "atomState",
	default: false,
});

export const shareModalState = atom({
	key: "shareModalState",
	default: false,
});

export const shareModalSchoolState = atom<string | undefined>({
	key: "shareModalSchoolState",
	default: undefined,
});

export const instaModalState = atom({
	key: "instaModalState",
	default: false,
});

export const reqSuccessfulState = atom({
	key: "reqSuccessfulState",
	default: false,
});

export const formDataState = atom<{
	[key: string]: string | undefined;
}>({
	key: "formDataState",
	default: {
		Name: undefined,
		Email: undefined,
		"Phone Number": undefined,
		"College Name": undefined,
		Year: undefined,
	},
});
