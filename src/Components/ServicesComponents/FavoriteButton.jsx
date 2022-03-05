import { Icon, IconButton, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'

const FavoriteButton = (props) => (
    <LightMode>
        <IconButton
            isRound
            bg="white"
            color=""
            border="none"
            borderColor='white'
            size="sm"
            _hover={{
                transform: 'scale(1.1)',

            }}
            sx={{
                ':hover > svg': {
                    transform: 'scale(1.1)',

                },
            }}
            transition="all 0.15s ease"
            icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
            boxShadow="inner"
            {...props}

        />
    </LightMode>
)

export default FavoriteButton