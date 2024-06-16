import { redirect } from "next/navigation";
import { GeneratedAnswers } from "../../templates";
import { http } from "@/core/axios";

export default async function GeneratedAnswersPage() {
  try {
    const response = await http.get("/api/v1/available-to-generate/");
    return <GeneratedAnswers />;
  } catch (error) {
    redirect("/404");
  }
}
