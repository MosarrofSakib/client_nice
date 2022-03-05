import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaStar } from 'react-icons/fa'


 const Rating = (props) => {
    const { defaultValue = 0, max = 5, size = 'md', rootProps } = props
    const color = useColorModeValue('gray.300', 'gray.600')

    return (
        <HStack spacing="0.5" {...rootProps}>
            {Array.from({
                length: max,
            })
                .map((_, index) => index + 1)
                .map((index) => (
                    <Icon
                        key={index}
                        as={FaStar}
                        fontSize={size}
                        color={index <= defaultValue ? "#f8a41e" : color}
                    />
                ))}
        </HStack>
    )
}

export default Rating