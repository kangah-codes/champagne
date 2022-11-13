import Airtable from "airtable";

Airtable.configure({
	apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID || "");

export const table = base(process.env.AIRTABLE_TABLE_NAME || "");

export const minifyItems = (records: any) =>
	records.map((record: any) => getMinifiedItem(record));

// to make record meaningful.
export const getMinifiedItem = (record: any) => {
	if (!record.fields.brought) {
		record.fields.brought = false;
	}
	return {
		id: record.id,
		fields: record.fields,
	};
};
