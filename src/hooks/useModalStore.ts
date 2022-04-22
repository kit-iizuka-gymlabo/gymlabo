import create from 'zustand'
import ModalStore from '@/types/store/Modal'

const useModalStore = create<ModalStore>(set => ({
  modalState: false,
  openModal: () => set({ modalState: true}),
  closeModal: () => set({ modalState: false})
}))

export default useModalStore