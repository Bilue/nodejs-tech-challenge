import os from "os";
import { stripIndents } from "common-tags";
import app from "./app";

const EXPRESS_CONFIG = {
  port: parseInt(process.env.PORT) || 8080,
  hostname: os.hostname(),
};

(async function start() {
  try {
    const { hostname, port } = EXPRESS_CONFIG;

    await app.listen(port, () => {
      console.log(
        stripIndents`-----------------------------------
        Started Express Server
        Port: ${port}
        Hostname: ${hostname}
        -----------------------------------`
      );
    });

  } catch (error) {
    console.error("FATAL BOOT ERROR", error);
    process.exit(1);
  }
})();
