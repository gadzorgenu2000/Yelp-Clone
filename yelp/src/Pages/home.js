import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'
import rest2 from '../Assets/rest2.jpg'
import SearchBar from '../Components/SearchBar'
import Services from '../Components/Services'

const Home = () => {
    return (
        <Box >
            <AlertInfo/>
            <Box pos='relative'>
                <Image  src={rest2} alt='restaurant' h={{md:'750px'}} w={{md: '100%'}}/>
                <Box pos='absolute'>
                    <Navbar/>
                    <SearchBar/>
                    <Services/>
                </Box>
            </Box>
            <Box>
                <Text color='red.400' fontWeight='bold' textAlign='center' mt={10}>Find the Best Business in Town</Text>
            </Box>
        </Box>
    )
}
export default Home
