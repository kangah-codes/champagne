import { getMinifiedItem } from "./../../utils/airtable";
/* eslint-disable import/no-anonymous-default-export */
import { table } from "../../utils/airtable";

export default async (req: any, res: any) => {
	try {
		// first check if body.email already exists in the table
		const existingRecords = await table
			.select({ filterByFormula: `Email = '${req.body.email}'` })
			.firstPage();
		const formattedRecords = existingRecords.map((record) => ({
			id: record.id,
			fields: record.fields,
		}));

		if (!formattedRecords.length) {
			const newRecords = await table.create([{ fields: req.body }]);
			res.status(200).json(getMinifiedItem(newRecords[0]));
		} else {
			res.status(409).json({ msg: "Email already exists" });
		}
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
