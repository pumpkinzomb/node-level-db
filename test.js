const express = require("express");
const app = express();
const port = 9999;
const { Level } = require("level");
const path = require("path");
const dbPath = path.join(__dirname, "osmosis.state.db");
console.log("dbPath", dbPath);

// const { encodeString, decodeString } = require("@tendermint/amino-js");
// const {
//   Codec,
//   FieldOptions,
//   TypeFactory,
//   Utils,
//   Types,
//   WireTypes,
// } = require("js-amino");

const db = new Level(dbPath, {
  valueEncoding: "view", // view, buffer => blob, uint8array
});

const iterator = db.iterator();

// console.log(iterator.count);
// db.get("ThisIsKey", function (err, value) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(value);
// });

// db.get("a", function (err, value) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(value);
// });

function toArrayBuffer(buf) {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

const run = async () => {
  const iterator = db.iterator();
  const entries = await db.iterator().all();
  // const stateData = entries.map((item) => {
  //   const [key, value] = item;
  //   return {
  //     key,
  //     value,
  //   };
  // });
  for (const [key, value] of entries) {
    // console.log("entry key: ", key);
    if (key === "consensusParamsKey:6798675") {
      // if (key === "validatorsKey:6798675") {
      console.log("entry key: ", key);
      console.log("entry value: ");
      console.log(value);
      console.log(JSON.stringify(Array.from(new Uint8Array(value))));
    }
  }
  // while (true) {
  //   const entries = await iterator.nextv(100);

  //   if (entries.length === 0) {
  //     break;
  //   }

  //   for (const [key, value] of entries) {
  //     console.log("key", key, "value", value);
  //   }
  // }

  await iterator.close();
};
run();

app.get("/state", async (req, res) => {
  const iterator = db.iterator();
  const entries = await db.iterator({ limit: 100 }).all();
  const stateData = entries.map((item) => {
    const [key, value] = item;
    return {
      key,
      value,
    };
  });
  res.json(stateData);
});

app.get(`/state/abci/:height`, async (req, res) => {
  const height = req.params.height;

  if (!height) {
    res.status(404).send("error");
  }
  let findData = await db.get(`abciResponsesKey:${height}`);

  //   res.json({
  //     key: `abciResponsesKey:${height}`,
  //     value: unicodeTranslation(findData),
  //   });

  res.send(`
    <h1>abciResponsesKey:${height}</h1>
    <pre>${unicodeTranslation(findData)}</pre>
  `);
});

app.get(`/state/validators/:height`, async (req, res) => {
  const height = req.params.height;

  if (!height) {
    res.status(404).send("error");
  }
  let findData = await db.get(`validatorsKey:${height}`);
  codec.unMarshalBinary();

  res.json({
    key: `validatorsKey:${height}`,
    value: findData,
  });
  // console.log("???", findData);
  // res.send(`
  //   <h1>validatorsKey:${height}</h1>
  //   <pre>${unicodeTranslation(findData)}</pre>
  // `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
