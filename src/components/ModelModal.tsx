import { Modal } from '@mui/material'
import ModelCard from '@/components/ModelCard'
import useModalStore from '@/hooks/useModalStore'

const ModelModal = () => {
  const store = useModalStore()
  
  return(
    <>
      <Modal
        open={store.modalState}
        onClose={store.closeModal}
      >
        <ModelCard />
      </Modal>
    </>
    
  ) 
}

export default ModelModal