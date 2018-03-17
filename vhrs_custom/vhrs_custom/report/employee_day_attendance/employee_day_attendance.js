// Copyright (c) 2016, Praba and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Employee Day Attendance"] = {
	"filters": [
		{
			"fieldname": "date",
			"label": __("Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		}

	]
}