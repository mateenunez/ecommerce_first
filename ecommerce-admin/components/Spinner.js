import { PulseLoader } from "react-spinners"


function Spinner() {
  return (
    <div>
        <PulseLoader color="#3662d6" size={15} margin={2} loading={true} speedMultiplier={1}/>
    </div>
  )
}

export default Spinner