import { FC } from "react"
import NavBar from "@/components/NavBar"
import useDrawerStore from "@/hooks/useDrawerStore"

const Header: FC = () => {
  const store = useDrawerStore()

  return (
    <>
      <NavBar 
        drawerState={store.drawerState}
        openDrawer={store.openDrawer}
        closeDrawer={store.closeDrawer}
      />
    </>
  )
}

export default Header