import { useFormContext } from "react-hook-form"

export const InputRadio = ({question}) => {
  const {register} = useFormContext()
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        {...register(question.name, {required: true})}
      />
      <label htmlFor={question.id}>
        {question.question}
        <span className='text-fuchsia-700 font-semibold'>*</span>
      </label>
    </div>
  )
}
