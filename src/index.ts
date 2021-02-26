import express from "express";
import handle from "./utils/routeHandler";
import FamilyRoutes from "./routes/FamilyRoutes";

const port = process.env.PORT || "8080";
const app = express();

app.get(
  "/debug",
  handle((_req, _res) => {
    throw new Error("Uh oh, I threw an error!");
  })
);

app.use("/api/Family", FamilyRoutes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
