import { getSnack } from '@/app/actions'

interface Props {
    params: { id: number };
  }

export default async function Page(props:Props) {

  const data = await getSnack(props.params.id);

  return <div className="flex flex-col items-center my-8 gap-y-8 w-1/2 mx-auto">
   {JSON.stringify(data)}
  </div>
}
