import './App.css'
import { useForm, FormProvider } from "react-hook-form";
import { db } from './utils/questions'
import { TextInput } from './components/TextInput/TextInput';
import { TextArea } from './components/TextArea/TextArea';
import { RadioImage } from './components/RadioImage/RadioImage';
import { InputRadio } from './components/InputRadio/InputRadio';
import { ComboBox } from './components/ComboBox/ComboBox';
import React from 'react';

function App() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = data => console.log(data);

  return (
    <main className='grid grid-cols-8 justify-items-center bg-fuchsia-700'>
      <h1 className='text-5xl my-8 col-span-12 text-white'>Prueba Tecnica TBS</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-8 bg-white rounded-lg py-12 px-8">
          {db.map((section, i) => {
            return (
              <fieldset key={i}>
                <legend className='text-3xl font-semibold text-fuchsia-700'>{section.title}</legend>
                {Object.values(section.questions).map((question, i) => {
                  return (
                    <React.Fragment key={i}>
                      {question.type === 'text' && (
                        <TextInput question={question} name={question.name} />
                      )}
                      {question.type === 'radio' && (
                        <InputRadio question={question} />
                      )}
                      {question.type === 'comboBox' && (
                        <ComboBox question={question} />
                      )}
                      {question.type === 'radioImage' && (
                        <RadioImage question={question} />
                      )}
                      {question.type === 'textarea' && (
                        <TextArea question={question} />
                      )}
                    </React.Fragment>
                  )
                })}
              </fieldset>
            )
          })}
          <button type="submit" className="bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg col-span-4">Enviar</button>
        </form>
      </FormProvider>
    </main>
  )
}

export default App
