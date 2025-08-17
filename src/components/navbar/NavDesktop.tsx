import { List, Text } from "@chakra-ui/react";
import { navItems } from "./nav-items";
import { barlow } from "@/assets/font";

export const NavDesktop = () => {
  return (
    <List.Root
      as={"ul"}
      flexDirection={"row"}
      listStyle={"none"}
      gap={4}
      hideBelow={"lg"}
    >
      {navItems.map(({ label }) => (
        <List.Item key={label}>
          <Text
            fontFamily={`${barlow.style.fontFamily}`}
            fontWeight={600}
            fontSize={"lg"}
          >
            {label}
          </Text>
        </List.Item>
      ))}
    </List.Root>
  );
};
