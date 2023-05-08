const { Kafka } = require("kafkajs");
const { OAuth2Client } = require("google-auth-library");
const cockroachDb = require("../data-access").cockroach;

const CLIENT_ID = "291210626473-e8q5l37ggbq9appd1tma8e8ruckbqa28.apps.googleusercontent.com" ;
const CLIENT_SECRET = "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" ;
const REDIRECT_URI = "http://localhost:5000/auth/google/callback" ;

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);



const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "renew-access-token" });
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "expiring-tokens", fromBeginning: true });
  console.log("Handler file");

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        "RENEW ACCESS TOKEN HANDLER FILE ::  reached each msg function"
      );
      parameters = await JSON.parse(message.value.toString());
      console.log("PARAMETERS", parameters.users);
      if (parameters.subject != "renew-access-tokens") return;

      parameters.users.forEach((user) => {
        client.setCredentials({ refresh_token: user.refresh_token });
        client
          .getAccessToken()
          .then(async (tokenResponse) => {
            const accessToken = tokenResponse.token;
            const databaseName = "email_client_cockroach1";
            console.log("NEW ACCESS TOKEN: ", accessToken);
            await cockroachDb.usersDb.updateAccessToken({
              accessToken,
              databaseName,
              userId: user.user_id,
            });
          })
          .catch((err) => {
            console.log("ERRORR CREATING ACCESS TOKEN:: ", err);
          });
      });
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);