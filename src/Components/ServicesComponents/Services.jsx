import { Box } from '@chakra-ui/react'
import ServicesCard from './ServiceCard'
import ServicesGrid from './ServiceGrid'
import axios from 'axios'
import {useState, useEffect} from 'react'



const Services = () => {
  
  const [services, setServices] = useState([])
  const fetchAllServices = () => {

      axios.get('https://niceservice.co/')
    .then((response) => {
        const services = response.data
        setServices(services)
        
    })
  }

  useEffect(() => {
      fetchAllServices()
  }, [])
  
    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: '4',
                md: '8',
                lg: '12',
            }}
            py={{
                base: '6',
                md: '8',
                lg: '12',
            }}
        >
   
         <p className= "home_para_1">These are our latest styles. Pick a style and book an appointment</p>


          

            <ServicesGrid>

                {services.map((service, index) => (
                    <ServicesCard key={index} service={service}/>
                ))}

            </ServicesGrid>

        </Box>

        
    )
}

export default Services
