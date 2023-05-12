import { FC } from 'react'
import Link from 'next/link'
import { FormLinkProps } from '@/features/Form/type'

const FormLink: FC<FormLinkProps> = ({ url, text }) => (
  <>
    <Link href={url}>
      {text}
    </Link>
  </>
)

export default FormLink