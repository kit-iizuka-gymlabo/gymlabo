import { useState } from "react";
import NavBar from "@/components/NavBar"

const Header = () => {
  const [drawerState, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerState)
  }

  return (
    <>
      <NavBar 
        drawerState={drawerState}
        drawerHandler={handleDrawerToggle}
      />
    </>
  )
}

export default Header