import React, { useState } from 'react'
import { Modal, Group, Button } from '@mantine/core'

export const LogInModal = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Ingresar'
      />

      <Group position='center'>
        <Button
          onClick={() => setOpened(true)}
          variant='subtle'
          radius='md'
          uppercase
        >
          Ingresar
        </Button>
      </Group>
    </>
  )
}
