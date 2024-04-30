import { Box, Center, Grid, Group, Text } from "@mantine/core";

import FormInput from "./FormInput";
import React from "react";

interface StyleProps {
  [key: string]: React.CSSProperties;
}

const styles: StyleProps = {
  container: {
    backgroundColor: "#fff",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
  },
  outerGrid: {
    border: "1px black solid",
  },
  headerText: {
    padding: "5px",
  },
  leftBorder: {
    borderLeft: "1px black solid",
  },
  rightBorder: {
    borderRight: "1px black solid",
  },
  bottomBorder: {
    borderBottom: "1px black solid",
  },
};

const inputSx = {
  root: { padding: "5px", width: "100%" },
  input: { backgroundColor: "#fff", color: "#000" },
};

const timeSx = {
  root: { padding: "5px" },
  input: { backgroundColor: "#fff", color: "#000" },
};

const GeologicTimeScale: React.FC = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.outerGrid}>
        <Grid style={styles.bottomBorder} gutter={0}>
          <Grid.Col span={4}>
            <Text fw="bold" style={styles.headerText}>
              Eon
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text fw="bold" style={styles.headerText}>
              Era
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text fw="bold" style={styles.headerText}>
              Period
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={styles.bottomBorder} gutter={0}>
          <Grid.Col span={4}>
            <Center w="100%" h="100%" style={styles.rightBorder}>
              <FormInput id="Phanerozoic" styles={inputSx} />
            </Center>
          </Grid.Col>
          <Grid.Col span={8}>
            <Grid gutter={0} style={styles.bottomBorder}>
              <Grid.Col span={6}>
                <Center w="100%" h="100%" style={styles.rightBorder}>
                  <FormInput id="Cenozoic" styles={inputSx} />
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>
                <FormInput id="Quaternary" styles={inputSx} />
                <FormInput id="Neogene" styles={inputSx} />
                <FormInput id="Paleogene" styles={inputSx} />
                <Box bg="#C5C6C7">
                  <Group justify="right">
                    <Text>Time:</Text>
                    <FormInput
                      id="CenozoicTime"
                      styles={timeSx}
                      rightSection={"Ma"}
                    />
                  </Group>
                </Box>
              </Grid.Col>
            </Grid>
            <Grid gutter={0} style={styles.bottomBorder}>
              <Grid.Col span={6}>
                <Center w="100%" h="100%" style={styles.rightBorder}>
                  <FormInput id="Mesozoic" styles={inputSx} />
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>
                <FormInput id="Cretaceous" styles={inputSx} />
                <FormInput id="Jurassic" styles={inputSx} />
                <FormInput id="Triassic" styles={inputSx} />
                <Box bg="#C5C6C7">
                  <Group justify="right">
                    <Text>Time:</Text>
                    <FormInput
                      id="MesozoicTime"
                      styles={timeSx}
                      rightSection={"Ma"}
                    />
                  </Group>
                </Box>
              </Grid.Col>
            </Grid>
            <Grid gutter={0}>
              <Grid.Col span={6}>
                <Center w="100%" h="100%" style={styles.rightBorder}>
                  <FormInput id="Paleozoic" styles={inputSx} />
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>
                <FormInput id="Permian" styles={inputSx} />
                <FormInput id="Carboniferous" styles={inputSx} />
                <FormInput id="Devonian" styles={inputSx} />
                <FormInput id="Silurian" styles={inputSx} />
                <FormInput id="Ordovician" styles={inputSx} />
                <FormInput id="Cambrian" styles={inputSx} />
                <Box bg="#C5C6C7">
                  <Group justify="right">
                    <Text>Time:</Text>
                    <FormInput
                      id="PaleozoicTime"
                      styles={timeSx}
                      rightSection={"Ma"}
                    />
                  </Group>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Grid gutter={0}>
          <Grid.Col span={4}>
            <Box style={styles.rightBorder}>
              <Box style={styles.bottomBorder}>
                <FormInput id="Proterozoic" styles={inputSx} />
              </Box>
              <FormInput id="Archean" styles={inputSx} />
              <Box bg="#C5C6C7">
                <Group justify="right">
                  <Text>Time:</Text>
                  <FormInput
                    id="ArcheanTime"
                    styles={timeSx}
                    rightSection={"Ma"}
                  />
                </Group>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default GeologicTimeScale;
