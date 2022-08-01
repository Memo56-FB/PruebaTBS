import { useFormContext } from "react-hook-form"

export const TextArea = ({question}) => {
  const {register} = useFormContext()
  return (
    <div className="flex flex-col">
      <label htmlFor={question.id}>
        {question.question}
        <span className='text-fuchsia-700 font-semibold'>*</span>
      </label>
      <textarea
        id={question.id}
        placeholder={question.placeHolder}
        className='border-fuchsia-600 border-2 rounded-md py-2 px-[1px]'
        {...register(question.name, {required: true})}
      />
    </div>
  )
}
