import { dehydrate, useQuery } from 'react-query'
import { queryClient, getUsers } from '../src/api'

export async function getServerSideProps() {
  await queryClient.prefetchQuery("users", () => getUsers())
  return {
    props: {
      dehydrateState: dehydrate(queryClient)
    }
  }
}
export default function Home() {
  const {data} = useQuery(["users"], () => getUsers());
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
