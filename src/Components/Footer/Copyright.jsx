
import { Text } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = (props) => (
    <Text fontSize="sm" {...props} color="gray">
        &copy; {new Date().getFullYear()} Nice Inc, Inc. All rights reserved.
    </Text>
)
