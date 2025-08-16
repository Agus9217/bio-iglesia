'use client'

import { IconButton, Menu, Portal } from "@chakra-ui/react"
import { IoMenuSharp } from "react-icons/io5"
import { navItems } from "./nav-items"

export const NavMobile = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild hideFrom={'lg'}>
        <IconButton
          colorPalette={'orange'}
          rounded={'none'}
        >
          <IoMenuSharp />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
              navItems.map(({ label }) => (
                <Menu.Item
                  key={label}
                  value={label}
                >
                  {label}
                </Menu.Item>
              ))
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

