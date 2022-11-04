import { Button } from "../components/Button";

export default function Buttons() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button label={'button'} type={'primary'} size={'text-sm'}/>
      <Button label={'button'} type={'primary'} size={'text-md'}/>
      <Button label={'button'} type={'primary'} size={'text-lg'}/>
      <Button label={'button'} type={'primary'} size={'text-2xl'}/>
    </div>
  )
}
