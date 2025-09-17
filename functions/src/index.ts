import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors")({origin: true});

export const enterGiveaway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }
    try {
      const {name, phone, ticket} = request.body;
      if (!name || !phone || !ticket) {
        response.status(400).send("Name, phone, and ticket are required.");
        return;
      }
      await db.collection("giveaway_entries").add({
        name,
        phone,
        ticket,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      response.status(200).send({message: "Successfully registered!"});
    } catch (error) {
      console.error("Error writing document: ", error);
      response.status(500).send("Internal Server Error");
    }
  });
});

export const getEntries = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    if (request.method !== "GET") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    try {
      const snapshot = await db.collection("giveaway_entries").get();
      const entries = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      response.status(200).send(entries);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      response.status(500).send("Internal Server Error");
    }
  });
});