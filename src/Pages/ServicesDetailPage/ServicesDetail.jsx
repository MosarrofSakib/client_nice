import {
  Box,
  Image,
  Skeleton,
  Stack,
  HStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../../Components/ServicesComponents/Rating'
import { FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 5px;
  background-color: #2A73E8;
  font-weight: bolder;
  height: 40px;
  width: 160px;
  &:hover {
    background-color: #709ee8;
  }
`
const ServicesDetail = () => {

  const [service, setServivce] = useState({})
  const { id } = useParams()

  const navigate = useNavigate()

  const handleDateTimePicker = () => {
    navigate('/datetime')
  }

  /* const fetchAService = async () => {
    const { data } = await axios.get(`https://niceservice.co/${id}`)
    setServivce(data)

  } */

  useEffect(() => {

    const fetchAService = async () => {
      const { data } = await axios.get(`https://niceservice.co/${id}`)
      setServivce(data)
  
    }
    fetchAService()
  },[id])
  return (

    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: '0',
        lg: '12',
      }}
      py={{
        base: '0',
        lg: '12',
      }}
    >
      <Link to="/">
        <FaArrowLeft className="back_button"/>
      </Link>

      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '0',
          lg: '20',
        }}
      >
        <Image
          src={service.image}
          alt="Service Image"
          fallback={<Skeleton />}
          maxH="500"
          minW="300px"
          objectFit="cover"
          flex="1"
          borderRadius="15"
          mt="5px"

        />



        <Box
          width={{
            lg: 'sm',
          }}
          transform={{
            base: 'translateY(-50%)',
            lg: 'none',
          }}
          bg={{
            base: useColorModeValue('gray.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          px={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
        >

          <Stack
            spacing={{
              base: '8',
              lg: '10',
            }}
          >



            <Stack
              spacing={{
                base: '2',
                lg: '4',
              }}
            >

              <h1 size="xl" className="hero-heading">
                {service.name}
              </h1>
              <p size="xl" fontWeight="normal" className="price">
                ${service.price}
              </p>
              <HStack>
                <Rating defaultValue={service.rating} size="sm" />
                {service.rating}
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                  ({service.numberOfReviews} reviews)
                   </Text>
              </HStack>

              <Text color={useColorModeValue('gray.600', 'gray.400')}>{service.description}</Text>
              <HStack />
              <Button onClick={handleDateTimePicker} disabled>Continue</Button>
            </Stack>

          </Stack>

        </Box>


       
      </Stack>
    </Box>
  )
}

export default ServicesDetail