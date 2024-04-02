import { createSnack, getSnacks } from '@/app/actions'
import SnackList from "./components/snack-list"
import { InputForm } from './components/input-form'


export default async function Page() {

  const snacks = await getSnacks();

  return <div className="flex flex-col items-center my-8 gap-y-8 w-1/2 mx-auto">
    <h1 className="text-4xl">Full Stack Snacks</h1>
    <InputForm  onCreate={createSnack}/>
    <SnackList snacks={snacks.data} />
  </div>
}
