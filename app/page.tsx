import fs from "fs";
import path from "path";

export default async function HomePage() {
  const readmePath = path.join(process.cwd(), "README.md");
  const readme = fs.readFileSync(readmePath, "utf-8");

  return (
    <main className="whitespace-pre-wrap font-mono text-sm px-8 py-12">
      {readme}
    </main>
  );
}

