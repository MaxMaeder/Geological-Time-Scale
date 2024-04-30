import { ActionIcon, Group, Title } from "@mantine/core";

import { IconBrandGithub } from "@tabler/icons-react";

const Header = () => (
  <Group justify="space-between" align="center" h="100%" mx="md">
    <Title>Geological Time Scale Quiz</Title>
    <ActionIcon
      variant="subtle"
      component="a"
      href="https://github.com/MaxMaeder/Geological-Time-Scale"
      target="_blank"
    >
      <IconBrandGithub />
    </ActionIcon>
  </Group>
);

export default Header;
