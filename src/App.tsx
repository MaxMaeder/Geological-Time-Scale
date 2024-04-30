import "@mantine/core/styles.css";

import { AppShell, Burger, MantineProvider } from "@mantine/core";

import Form from "./components/Form";
import Header from "./components/Header";
import { Provider as ReduxProvider } from "react-redux";
import Sidebar from "./components/Sidebar";
import { store } from "./store";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <ReduxProvider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Header />
          </AppShell.Header>

          <AppShell.Navbar p="md">
            <Sidebar />
          </AppShell.Navbar>

          <AppShell.Main>
            <Form />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </ReduxProvider>
  );
}
