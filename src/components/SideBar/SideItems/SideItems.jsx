
export default function SideItems(props){
    const {itemDetails} = props
    const {name} = itemDetails
    return (
        <li className="hover:bg-gray-800 text-center p-1 hover:text-white hover:font-bold hover:shadow block" >{name}</li>
    )
}
