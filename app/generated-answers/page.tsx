import { redirect } from "next/navigation";
import { GeneratedAnswers } from "../../templates";

export default async function GeneratedAnswersPage() {
  try {
    return <GeneratedAnswers />;
  } catch (error) {
    redirect("/404");
  }
}
