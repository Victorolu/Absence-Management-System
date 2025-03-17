import './BaseButton.scss';

enum ButtonTheme {
    Default = 'default',
    DefaultOutline = 'default-outline',
    Red = 'red',
    RedOutline = 'red-outline'
}


interface BaseButtonProps {
    children: string,
    buttonTheme: ButtonTheme,
    onClick: () => void,
    isSubmit?: boolean
}

function BaseButton({ buttonTheme = ButtonTheme.Default, onClick, isSubmit = false, children } : BaseButtonProps) {
    return (
        <button className={`base-button ${buttonTheme}`} onClick={onClick} type={isSubmit ? 'submit' : 'button'}>
            {children}
        </button>
    )
}

export { BaseButton, ButtonTheme }