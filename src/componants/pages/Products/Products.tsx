import ProductCart from "../productCart/ProductCart"
import { Grid } from "@chakra-ui/react"
import axios from "axios";
import { IProduct } from "@/interFaces/ProductInteFaces";
import { useQuery } from "@tanstack/react-query";
import CartLoading from "@/componants/UI/CartLoading";
interface IProps { }

const Products = ({ }: IProps) => {

  const { isLoading, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products?fields=title,price&sort=createdAt:DESC&populate[category]=true&populate[image]=true`);
      return data;
    }
  })
  if (isLoading) {
    return (
      <Grid margin={30} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="6px">
        {Array.from({ length: 20 }, (_, idx) => (
          <CartLoading key={idx} />
        ))}
      </Grid>
    );
  }
  return (
    <>


      <Grid margin={30} templateColumns={"repeat(auto-fill , minmax(300px ,1fr))"} gap={'6px'}>
        {
          data.data.map((product: IProduct) => <ProductCart key={product.id} {...product} />)
        }

      </Grid>

    </>

  )
}
export default Products