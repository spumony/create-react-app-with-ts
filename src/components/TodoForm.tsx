import React, { useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: any) => {
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        props.onAdd(ref.current!.value)
        ref.current!.value = ''
        // console.log(title)
        // setTitle('')
      }
    }

  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Add your new task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        New task
      </label>
    </div>
  )
}
