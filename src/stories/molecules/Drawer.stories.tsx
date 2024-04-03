import { Meta, StoryObj } from "@storybook/react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ComponentProps, FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

type CustomArgs = {
  triggerChildren: string;
  drawerTitleChildren: string;
  drawerDescriptionChildren: string;
  drawerCloseChildren: string;
  withOverlay: boolean;
};

type DrawerWithCustomArgs = ComponentProps<typeof Drawer> & CustomArgs;

const meta: Meta<DrawerWithCustomArgs> = {
  component: Drawer,
  subcomponents: {
    Button: Button as FunctionComponent<unknown>
  },
  tags: ["autodocs"],
  argTypes: {
    triggerChildren: { control: { type: "text" } },
    drawerTitleChildren: { control: { type: "text" } },
    drawerDescriptionChildren: { control: { type: "text" } },
    drawerCloseChildren: { control: { type: "text" } },
    shouldScaleBackground: { control: { type: "boolean" } },
    withOverlay: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<DrawerWithCustomArgs>;

export const Default: Story = {
  args: {
    triggerChildren: "Open Drawer",
    drawerTitleChildren: "Drawer Title",
    drawerDescriptionChildren: "Description of what the drawer does",
    drawerCloseChildren: "Close",
    shouldScaleBackground: true,
    withOverlay: true,
  } satisfies DrawerWithCustomArgs,
  render: ({
    triggerChildren,
    drawerTitleChildren,
    drawerDescriptionChildren,
    drawerCloseChildren,
    shouldScaleBackground,
    withOverlay,
  }: DrawerWithCustomArgs) => (
    <Drawer shouldScaleBackground={shouldScaleBackground}>
      {withOverlay && <DrawerOverlay />}
      <DrawerTrigger>{triggerChildren}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{drawerTitleChildren}</DrawerTitle>
          <DrawerDescription>{drawerDescriptionChildren}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <button>Submit</button>
          <DrawerClose>{drawerCloseChildren}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithButton: Story = {
  args: {
    triggerChildren: "Open Drawer",
    drawerTitleChildren: "Drawer Title",
    drawerDescriptionChildren: "Description of what the drawer does",
    drawerCloseChildren: "Close",
    shouldScaleBackground: true,
    withOverlay: true,
  } satisfies DrawerWithCustomArgs,
  render: ({
    triggerChildren,
    drawerTitleChildren,
    drawerDescriptionChildren,
    drawerCloseChildren,
    shouldScaleBackground,
    withOverlay,
  }: DrawerWithCustomArgs) => (
    <Drawer shouldScaleBackground={shouldScaleBackground}>
      {withOverlay && <DrawerOverlay />}
      <DrawerTrigger asChild>
        <Button>{triggerChildren}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{drawerTitleChildren}</DrawerTitle>
          <DrawerDescription>{drawerDescriptionChildren}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>{drawerCloseChildren}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
