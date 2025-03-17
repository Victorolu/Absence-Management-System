import './CalendarCell.scss';

enum CellType {
    Normal = 'normal',
    Week = 'week',
    Shutdown = 'shutdown',
    PublicHoliday = 'holiday'
}

interface CalendarCellProps {
    cellType: CellType,
    text?: string
}

function CalendarCell ({cellType, text} : CalendarCellProps) {
    return (<div className={`calendar-cell ${cellType}`}>
        {cellType === CellType.Week ? <span className='week-day'>{text}</span> : <span className='date'>{text}</span>}
    </div>)
}

export default CalendarCell;