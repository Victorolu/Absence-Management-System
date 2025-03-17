import './BaseTextBox.scss';

enum InputType {
    Text = 'text',
    Email = 'email',
    Password = 'password'
}

interface BaseTextBoxProps {
    inputType: InputType,
    value: string,
    valueSetter: (newValue: string) => void,
    placeholder?: string
    id: string,
    required?: boolean,
    pattern?: string
}

function BaseTextBox({inputType, value, valueSetter, placeholder, id, required = false, pattern = ''} : BaseTextBoxProps) {
    return (
     <input autoComplete="off" className="base-text-box" type={inputType} id={id} placeholder={placeholder} value={value} onChange={e => valueSetter(e.target.value)} required={required} pattern={pattern}/>   
    )
}

export { BaseTextBox, InputType };