import { google } from "googleapis";
import keys from "../../secrets.json";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            process.env.GCP_CLIENT_EMAIL, 
            null, 
            process.env.GCP_PVT_KEY,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: process.env.SHEET_ID,
                range: 'announcements'
            };

            const response = await gsapi.spreadsheets.values.get(opt);
            console.log(response);

            // return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
            const [titles, ...announcements] = response.data.values;
        
            const formattedItems = announcements.map((row) => {
             const obj = {}
             row.forEach((field, index) => obj[titles[index]] = field)
                 return obj;
            });

            const myObject = JSON.parse(JSON.stringify(formattedItems));


            return res.status(400).send(myObject);

        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}