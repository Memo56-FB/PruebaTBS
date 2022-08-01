import { useFormContext } from "react-hook-form"

export const ComboBox = ({question}) => {
  const {register} = useFormContext()
  return (
    <div className="flex flex-col">
      <label htmlFor={question.id}>{question.question} <span className='text-fuchsia-700 font-semibold'>*</span></label>
      {question.options.map((option, i) => {
        return (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
            <input type="checkbox" {...register(question.name)} />
            <label htmlFor={option.id}>{option.label}</label>
            <img src={option.image} className="col-span-full" alt="" />
          </div>
        )
      })}
    </div>
  )
}
