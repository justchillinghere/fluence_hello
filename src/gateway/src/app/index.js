import { Fluence, KeyPair } from "@fluencelabs/js-client";
import relays from "../relays.json" assert { type: "json" };

import {
  helloWorld,
  helloWorldRemote,
  showSubnet,
  runDeployedServices,
  showTimeOfSubnetNodes,
  showDeploymentDetails,
} from "../compiled-aqua/main.js";

import { Type } from "@sinclair/typebox";
const DEFAULT_ACCESS_TOKEN = "abcdefhi";

const DEFAULT_PEER_PRIVATE_KEY = Buffer.from(
  (await KeyPair.randomEd25519()).toEd25519PrivateKey()
).toString("base64");

// This is the peer's private key.
const PEER_PRIVATE_KEY =
  process.env.PEER_PRIVATE_KEY ?? DEFAULT_PEER_PRIVATE_KEY;
if (PEER_PRIVATE_KEY === DEFAULT_PEER_PRIVATE_KEY) {
  console.warn("Randomly generated peer private key is used.");
}

const PEER_PRIVATE_KEY_BYTES = new Uint8Array(
  Buffer.from(PEER_PRIVATE_KEY, "base64")
);

// This is an authorization token for the gateway service.
const ACCESS_TOKEN = process.env.ACCESS_TOKEN ?? DEFAULT_ACCESS_TOKEN;
if (ACCESS_TOKEN === DEFAULT_ACCESS_TOKEN) {
  console.warn(
    "Default access token is used. Remember to generate the appropriate token and save it in env variables."
  );
}

const relay = relays[0];
export default async function (server) {
  await server.register(import("@fastify/rate-limit"), {
    max: 100,
    timeWindow: "1 minute",
  });

  server.addHook("onReady", async () => {
    await Fluence.connect(relay, {
      keyPair: {
        type: "Ed25519",
        source: PEER_PRIVATE_KEY_BYTES,
      },
    });
  });

  //   server.addHook("onRequest", async (request, reply) => {
  //     const header = request.query.access_token ?? request.headers.access_token;
  //     if (header !== ACCESS_TOKEN) {
  //       await reply.status(403).send({
  //         error: "Unauthorized",
  //         statusCode: 403,
  //       });
  //     }
  //   });

  server.addHook("onClose", async () => {
    await Fluence.disconnect();
  });

  const callbackBody = Type.Object({
    name: Type.String(),
  });

  const callbackResponse = Type.String();

  const runDeployedServicesResponse = Type.Array(
    Type.Object({
      answer: Type.Union([Type.String(), Type.Null()]),
      worker: Type.Object({
        host_id: Type.String(),
        pat_id: Type.String(),
        worker_id: Type.Union([Type.String(), Type.Null()]),
      }),
    })
  );

  // Request and response with query param
  server.get("/callback/hello", async (request, reply) => {
    const name = request.query.name;
    const result = await helloWorldRemote(name);
    return reply.send(result);
  });

  // Fire and forget
  server.get("/webhook/hello", async (_request, reply) => {
    void helloWorldRemote("Fluence");
    return reply.send();
  });

  // No validation schema for simplicity
  server.get("/callback/showSubnet", async (_request, reply) => {
    const result = await showSubnet();
    return reply.send(result);
  });

  server.post("/webhook/runDeployedServices", async (_request, reply) => {
    void runDeployedServices();
    return reply.send();
  });

  server.get(
    "/callback/showDeploymentDetails",
    { schema: { response: { 200: Type.String() } } },
    async (_request, reply) => {
      const result = await showDeploymentDetails();
      return reply.send(result);
    }
  );

  server.get("/callback/showTimeOfSubnetNodes", async (_request, reply) => {
    const result = await showTimeOfSubnetNodes();
    return reply.send(result);
  });
}
