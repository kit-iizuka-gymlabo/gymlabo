type HeaderProps = {
  isOpen: boolean
  onOpen: () => void 
  onClose: () => void
  handleLogOut: () => Promise<void>
}

export default HeaderProps