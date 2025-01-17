import app from "./server";
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
