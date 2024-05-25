import { Typography, Button, Checkbox, Logo, Divided, Paper } from "@/components";
import { Nav } from "../modules";
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

      {/* <Checkbox></Checkbox>
      <Checkbox checked></Checkbox>
      <Checkbox disabled></Checkbox>
      <Checkbox checked disabled></Checkbox> */}

      <Logo />

      <Divided />

      <Nav
        menu={[
          {
            href: "/",
            label: "Тематический кодификатор",
          },
          {
            href: "text",
            label: "Генератор задач",
          },
          {
            href: "text",
            label: "label",
          },
          {
            href: "text",
            label: "label",
          },
          {
            href: "text",
            label: "label",
          },
          {
            href: "text",
            label: "label",
          },
        ]}
      />

      <Paper>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quam magni debitis,
        maiores praesentium fugiat incidunt dolor et suscipit ratione neque reprehenderit soluta
        inventore nobis! Quaerat ipsum blanditiis labore earum?
      </Paper>
    </main>
  );
}
