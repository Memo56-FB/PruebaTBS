import { useFormContext } from "react-hook-form"

export const RadioImage = ({question}) => {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={question.id}>{question.question} <span className='text-fuchsia-700 font-semibold'>*</span></label>
      <img src={question.image} className='w-[60%]' alt="" />
      <div className='flex gap-8'>
        {question.options.map((option, i) => {
          return (
            <div key={i} className="flex gap-4">
              <input
                type="radio"
                {...register(question.group, {required: true})}
                id=""
                value={option.value}
              />
              <label htmlFor="">{option.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
