import './FilterButton.css' 

type Props = { 
    text: string;
}

function FilterButton (props : Props) {
    return (
        <button>
            {props.text}
        </button>
    )
}
 
export default FilterButton; 