import { FC, forwardRef } from 'react'
import {
  Modal,
  Typography,
  Card, 
  CardActionArea, 
  CardContent,
  CardMedia
} from '@mui/material'
import PosterModalProps from '@/types/interfaces/PosterModal'
// import ModelCard from '@/components/molecules/ModelCard'

const PosterModal: FC<PosterModalProps> = ({ modalState, onClose }) => (
  <>
    <Modal
      open={modalState}
      onClose={onClose}
    >
      <Card sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image='/gymlab.jpg'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GYMLAB ～歴史の継承と新しい技術・交わりの形成拠点～
            </Typography>
            <Typography variant="body2" color="text.secondary">
              九工大が持つ知識・技術・設備を有機的に結びつける交わりの形成拠点としての機能
              九工大が長い歴史の中で培ってきた知見・技術を、見て触れる展示スペースを整備
              リアルとバーチャル(Web会議等の環境整備)の融合空間で、産学官一体となった共創活動を実現
              九工大が生み出した技術シーズを社会実装するための事業化支援
              九工大が持つ知識・技術・設備を生かした、企業が持つ技術課題の解決策の提案と実践
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>      
    </Modal>
  </>
) 

export default PosterModal