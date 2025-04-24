import { IProduct } from "@/interFaces/ProductInteFaces";
import { Button, Card, CardBody, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ProductCart = ({image , title ,price}:IProduct) => {
  let { colorMode } = useColorMode();
  const {url} = image
  return (
    <>
      <Card textAlign={'center'} border={'1px solid hsl(0, 0.00%, 30.20%)'}>
        <CardBody>
          <Image
            src={`${import.meta.env.VITE_SERVER_URL}${url}`}
            alt='Green double couch with wooden legs'
            borderRadius='sm'
            mt={'10px'}
            objectFit={'cover'}
            mx={'auto'}
            boxSize={'250px'}
            backgroundPosition={'center'}

          />
          <Stack mt='6'>
            <Heading size='md' h={'60px'}>{title}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Link to={'product/1'}>
          <Button
            bg={colorMode === 'light' ? ' #e6f3fd' : "  indigo "}
            color={colorMode === 'light' ? 'black' : " white"}
            w={'90%'}
            p={'5px'}
            mx={'auto'}
            mb={'5px'}
            _hover={{ bg: colorMode === 'light' ? 'indigo' : "  #e6f3fd" }}
            variant='ghost'
            colorScheme='blue'>
            Add to cart
          </Button>
        </Link>
      </Card>
    </>
  )
}
export default ProductCart