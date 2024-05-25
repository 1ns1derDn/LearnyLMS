import { Typography, Button, Checkbox, Logo } from "@/components";

export default function Home() {
  return (
    <main>
      <Typography variant="headline1">Headline 1</Typography>
      <Typography variant="headline2">Headline 2</Typography>
      <Typography variant="text1">Text 1</Typography>
      <Typography variant="text2">Text 2</Typography>
      <Typography variant="text3">Text 3</Typography>
      <Typography variant="text4">Text 4</Typography>

      <Button variant="primary">Составить вариант</Button>
      <Button variant="secondary" Icon={<>X</>} style={{ marginBottom: "25px" }}>
        Удалить все
      </Button>

      <Checkbox></Checkbox>
      <Checkbox checked></Checkbox>
      <Checkbox disabled></Checkbox>
      <Checkbox checked disabled></Checkbox>

      <Logo />
    </main>
  );
}
