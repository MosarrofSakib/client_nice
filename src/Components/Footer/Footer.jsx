import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright.jsx'
import { Logo } from './Logo'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => (
    <footer style={{ backgroundColor: '#F7F7F7' }}>
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7xl"
            py="12"
            px={{
                base: '4',
                md: '8',
            }}
            bg="#F7F7F7"
        >
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <Logo />
                    <SocialMediaLinks/>
                </Stack>
                <Copyright
                    alignSelf={{
                        base: 'center',
                        sm: 'start',
                    }}
                />
            </Stack>
        </Box>
    </footer>
)

export default Footer