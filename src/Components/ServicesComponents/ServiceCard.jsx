import {
    AspectRatio,
    Box,
    HStack,
    Image,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import Rating  from './Rating'
import FavoriteButton from './FavoriteButton'
import { Link } from 'react-router-dom'


const ServiceCard = (props) => {
    const { rootProps } = props
    return (
        <div className="content">
            <Stack
                spacing={useBreakpointValue({
                    base: '2',
                    md: '3',
                })}
                {...rootProps}
            >
                <Box position="relative">
                    <Link to={`/services/${props.service._id}`}>
                    <AspectRatio ratio={4 / 3}>

                        <Image
                            src={props.service.image}
                            alt={props.service.name}
                            cursor="pointer"
                            draggable="false"
                            fallback={<Skeleton />}
                            borderRadius={useBreakpointValue({
                                base: 'md',
                                md: 'xl',
                            })
                        }
                            objectFit="cover"
                        />

                    </AspectRatio>
                    </Link>
                    <FavoriteButton
                        position="absolute"
                        top="4"
                        right="4"
                        aria-label={`Add ${props.service.name} to your favorites`}
                        backgroundColor="transparent"
                        color="white"
                        fontWeight="bold"
                        fontSize="22px"
                        border="none"
                    />
                </Box>
                <Stack>
                    <Stack spacing="1">
                        <Text fontWeight="md" fontSize="md" color={"gray"}>
                            {props.service.name}
                        </Text>
                        {props.service.price}
                    </Stack>
                    <HStack>
                        <Text fontSize="xl" color={"black"} fontWeight="bold">
                            ${props.service.price}
                        </Text>
                    </HStack>
                    <HStack>
                        <Rating defaultValue={props.service.rating} size="sm" />
                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                            ({props.service.numberOfReviews} reviews)
          </Text>
                    </HStack>
                </Stack>
            </Stack>

        </div>

    )
}

export default ServiceCard