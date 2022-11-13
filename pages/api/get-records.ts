/* eslint-disable import/no-anonymous-default-export */
import { table } from "../../utils/airtable";

export default async (req: any, res: any) => {
	try {
		const records = await table.select({}).firstPage();
		const formattedRecords = records.map((record) => ({
			id: record.id,
			fields: record.fields,
		}));

		res.statusCode = 200;
		res.json(formattedRecords);
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
