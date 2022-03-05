import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialMediaLinks = (props) => (
    <ButtonGroup variant="ghost" color="black" {...props}>
        <IconButton as="a" href="https://www.linkedin.com/in/daniel-amoateng-959a27181/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
        <IconButton as="a" href="https://github.com/Danielamoateng1989" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
        <IconButton as="a" href="https://twitter.com/danny_bee3" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
)

export default SocialMediaLinks