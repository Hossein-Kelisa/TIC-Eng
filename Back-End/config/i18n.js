import path from "path";
import { fileURLToPath } from "url";
import i18n from "i18n";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
  locales: ["en", "fa"],
  directory: path.join(__dirname, "../locales"), // go up one folder
  defaultLocale: "en",
  queryParameter: "lang", // e.g. /api/health?lang=fa
  objectNotation: true,
});

export default i18n;
