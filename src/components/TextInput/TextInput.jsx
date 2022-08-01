import { useFormContext } from "react-hook-form"

export const TextInput = ({question, name}) => {
  const {register, formState: {errors}} = useFormContext()
  return (
    <div className="flex flex-col">
      <label htmlFor={question.id}>
        {question.question}
        <span className='text-fuchsia-700 font-semibold'>*</span>
      </label>
      <input
        placeholder={question.placeHolder}
        className='border-fuchsia-600 border-2 rounded-md py-2 px-[1px]'
        {...register(question.name, {required: true})}
      />
    </div>
  )
}
