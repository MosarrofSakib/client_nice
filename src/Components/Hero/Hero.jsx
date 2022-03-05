import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';

const Hero = () => {
    return (
        <Flex
            w={'full'}
            h={'45vh'}
            backgroundImage={
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'6xl'} align={'flex-start'} spacing={6}>
                    <Text
                        
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
                        Need a home service appointment? We got you!
                   </Text>
                   
                </Stack>
            </VStack>
        </Flex>
    );
}

export default Hero