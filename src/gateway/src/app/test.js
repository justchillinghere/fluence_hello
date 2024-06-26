import { Fluence, KeyPair } from "@fluencelabs/js-client";

// const DEFAULT_PEER_PRIVATE_KEY = (
//   await KeyPair.randomEd25519()
// ).toEd25519PrivateKey();

// const DEFAULT_PEER_PRIVATE_KEY = Buffer.from(
//   (await KeyPair.randomEd25519()).toEd25519PrivateKey()
// ).toString("base64");

// console.log(DEFAULT_PEER_PRIVATE_KEY);

// Generate a random peer private key
const DEFAULT_PEER_PRIVATE_KEY = Buffer.from(
  (await KeyPair.randomEd25519()).toEd25519PrivateKey()
).toString("base64");

// If user doesn't provide a peer private key in env variables, use the default one
const PEER_PRIVATE_KEY =
  process.env.PEER_PRIVATE_KEY ?? DEFAULT_PEER_PRIVATE_KEY;

// Convert the peer private key to bytes
const PEER_PRIVATE_KEY_BYTES = new Uint8Array(
  Buffer.from(PEER_PRIVATE_KEY, "base64")
);

// Define the Fastify plugin function
export default async function (server) {
  // Connect to the Fluence Network on the server start
  server.addHook("onReady", async () => {
    await Fluence.connect(relay, {
      keyPair: peerKeyObject, // Object with your private key created before
    });
  });
  // Request and response with query param
  server.get("/callback/hello", async (request, reply) => {
    const name = request.query.name;
    return await helloWorldRemote(name);
  });
}
