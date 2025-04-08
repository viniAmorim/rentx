import "reflect-metadata";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { app } from "./app";

AppDataSource.initialize()
  .then(() => {
    app.listen(3333, () => console.log("🚀 Server running on port 3333"));
  })
  .catch((error) => console.error("❌ Data Source initialization error", error));
