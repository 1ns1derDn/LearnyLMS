import { redirect } from "next/navigation";
import { AvailableToGenerate } from "../../templates";
import { http } from "@/core/axios";

export default async function ThematicCodifierPage() {
  try {
    const response = await http.get("/api/v1/available-to-generate/");
    return <AvailableToGenerate data={response.data} />;
  } catch (error) {
    redirect("/404");
  }
}
