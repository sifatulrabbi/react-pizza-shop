import { useState } from "react"

const useSidebar = (value) => {
   const [show, setShow] = useState(value)

   const toggle = () => setShow(!show)

   return [show, toggle]
}

export default useSidebar
