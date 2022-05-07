import create from 'zustand'
import { DrawerStore } from '@/types/store'

const useDrawerStore = create<DrawerStore>(set => ({
  drawerState: false,
  openDrawer: () => set({ drawerState: true}),
  closeDrawer: () => set({ drawerState: false})
}))

export default useDrawerStore