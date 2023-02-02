import React, { memo, useCallback } from 'react'
import { Button, Col, Row, Space, Text } from '@/components/widgets'
import { hideModalComponent } from '../../dialog'

type IProps = {
  onClose?: () => void
  onConfirm?: () => void
  title: string
  content: string
  labelConfirm?: string
  labelCancel?: string
}

export const ConfirmModal: React.FC<IProps> = memo(function ({
  onClose,
  onConfirm,
  title,
  content,
  labelCancel = 'Cancel',
  labelConfirm = 'OK',
}) {
  const handleClose = useCallback(() => {
    onClose?.()
    hideModalComponent()
  }, [onClose])

  const handleConfirm = useCallback(() => {
    onConfirm?.()
    hideModalComponent()
  }, [onConfirm])

  return (
    <Col>
      <Col>
        <Text variant="normal">{title}</Text>
      </Col>
      <Col>
        <Text variant="subTitle">{content}</Text>
      </Col>
      <Row>
        <Button isModal onPress={handleClose}>
          {labelCancel}
        </Button>
        <Space width={16} />
        <Button isModal onPress={handleConfirm}>
          {labelConfirm}
        </Button>
      </Row>
    </Col>
  )
})
