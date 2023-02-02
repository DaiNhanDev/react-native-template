import React, { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ViewProps } from 'react-native'
import { Row } from '../row'
import { WIDTH } from '../../../constants'
import { Text } from '../text'
import { Center } from '../center'
import { Col } from '../col'
import { Space } from '../space'
import { styles } from '../../../theme/styles'

type Props = {
  leading?: React.ReactNode
  actions?: React.ReactNode
  title?: string
  safe?: boolean
}

export const AppBar: React.FC<ViewProps & Props> = function ({ leading, actions, title, safe }) {
  const insets = useSafeAreaInsets()
  const topSpace = useMemo(() => (!safe ? insets.top : 0), [insets.top, safe])
  return (
    <Col
      width={WIDTH}
      height={56 + topSpace}
      backgroundColor="dark"
      paddingHorizontal="16px"
      {...(styles.shadow as any)}>
      <Space height={topSpace} />
      <Row>
        {leading && <Center>{leading}</Center>}
        <Center>
          <Text variant="normal">{title}</Text>
        </Center>
        {actions && <Row>{actions}</Row>}
      </Row>
    </Col>
  )
}
